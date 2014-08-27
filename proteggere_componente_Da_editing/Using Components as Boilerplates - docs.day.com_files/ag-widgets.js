Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};


/**
 * The <code>CQ.form.MultiFieldMultiField</code> class represents an editable list
 * of form fields for editing multi value properties.
 * 
 * @class CQ.form.MultiFieldMultiField
 * @extends CQ.form.CompositeField
 */
CQ.form.MultiFieldMultiField = CQ.Ext.extend(CQ.form.CompositeField, {

    /**
     * @cfg {Object} fieldConfig
     * The configuration options for the fields (optional).
     */
    fieldConfig: null,
    
    /**
     * @cfg {Object} globalConfig
     * The configuration options for the fields, to create a new field for the form.
     */
    globalConfig: null,
    

    /**
     * Creates a new <code>CQ.form.MultiFieldMultiField</code>.
     * @constructor
     * @param {Object} config The config object
     */
    constructor: function(config) {
        var list = this;

        if (!config.fieldConfig) {
            config.fieldConfig = {};
        }
        if (!config.fieldConfig.xtype) {
            config.fieldConfig.xtype = "textfield";
        }
        config.fieldConfig.name = config.name;
 
		this.fieldConfig = config.fieldConfig;
		
        var items = new Array();

        if(config.readOnly) {
            //if component is defined as readOnly, apply this to all items
            config.fieldConfig.readOnly = true;
        } else {
            items.push({
                "xtype":"button",
                "text":"+",
                "handler":function() {
                    list.addItem();
                }
            });
        }
        
        items.push({
            "xtype":"hidden",
            "name":config.name + CQ.Sling.DELETE_SUFFIX
        });
        
        config = CQ.Util.applyDefaults(config, {
            "defaults":{
                "xtype":"multifieldmultifielditem",
                "name":config.name,
                "fieldConfig":config.fieldConfig
            },
            "items":[
                { 
                    "xtype":"panel",
                    "border":false,
                    "bodyStyle":"padding:4px",
                    "items":items
                }
            ]
        });
        CQ.form.MultiFieldMultiField.superclass.constructor.call(this,config);
        if (this.defaults.fieldConfig.regex) {
            // somehow regex get broken in this.defaults, so fix it
            this.defaults.fieldConfig.regex = config.fieldConfig.regex;
        }
        this.addEvents(
            /**
             * @event change
             * Fires when the value is changed.
             * @param {CQ.form.MultiFieldMultiFieldNodes} this
             * @param {Mixed} newValue The new value
             * @param {Mixed} oldValue The original value
             */
            "change"
        );
    },

    /**
     * Adds a new field to the widget.
     * @param value The value of the field
     */
    addItem: function(value) {
    	var index = this.items.getCount()-1;
        var item = this.insert(index, {"nodeIndex": index});
        this.findParentByType("form").getForm().add(item);        
        this.doLayout();
        if (value) {
            item.setValue(value);
        }
    },

    /**
     * Returns the data value.
     * @return {String[]} value The field value
     */
    getValue: function() {
        var value = new Array();
        this.items.each(function(item, index/*, length*/) {
            if (item instanceof CQ.form.MultiFieldMultiField.Item) {
                value[index] = item.getValue();
                index++;
            }
        }, this);
        return value;
    },
    
    /**
     * Sets a data value into the field and validates it.
     * @param {Mixed} value The value to set
     */
    setValue: function(value) {
        this.fireEvent("change", this, value, this.getValue());
    	var oldItems = this.items;
        oldItems.each(function(item/*, index, length*/) {
            if (item instanceof CQ.form.MultiFieldMultiField.Item) {
                this.remove(item, true);
                this.findParentByType("form").getForm().remove(item);
            }
        }, this);
        this.doLayout();
        if ((value != null) && (value != "")) {
            if (value instanceof Array || CQ.Ext.isArray(value)) {
				for (var i = 0; i < value.length; i++) {
                	var storedItem = value[i];
	            	var valueString = null;
                    for (var key=0; key < Object.size(this.fieldConfig);key++) {
	            	//for (var key=0; key < this.fieldConfig.size();key++) {
	            		
            			if ( (this.fieldConfig[key]) && (this.fieldConfig[key].name) ) {
	            			var fieldName = this.fieldConfig[key].name;
	            			if (fieldName.indexOf("/") > -1) {
	            				fieldName = fieldName.substring(fieldName.lastIndexOf("/")+1);
	            			}
		            		if (storedItem[fieldName]) {
		            			if (valueString == null) {
		            				valueString = storedItem[fieldName];
		            			} else {
		            				valueString = valueString + "|" + storedItem[fieldName];
		            			} 
		            		} else {
		            			if (valueString == null) {
		            				valueString = "";
		            			} else {
		            				valueString = valueString + "|";
		            			}
		            		}
            			}

	            	}
	            	this.addItem(valueString);
            	}
            } else {
            	this.addItem(value);
            }
        }
    },
    
    /**
    /* ValidateValue function added on 4/8/2010 by Huz
    /*
    /* This validateValue enforces user to click on + initially when content is being first created.
    /*
    /* How to add validation: Add allowBlank="{Boolean}false" on the same level where
    /* xtype="multifieldmultifield" is defined in dialog.xml
    /*
    /* Note: You still have to put allowBlank="{Boolean}false" on the fields under
    /* multifield where you want to strictly enforce editors to provide values. If not provided
    /* than users will click on + and this validation will skip.
    /* EXAMPLE to add allowBlank on multifieldmultifield:
    /*
    /*      <links
    /*                    jcr:primaryType="cq:Widget"
    /*                    fieldLabel="Links"
    /*                    name="./links"
    /*                    allowBlank="{Boolean}false"
    /*                    xtype="multifieldmultifield">
    /*                    <fieldConfig jcr:primaryType="cq:WidgetCollection">
    /*                        <field1
    /*                            jcr:primaryType="cq:Widget"
    /*                            fieldLabel="Link Title"
    /*                            name="linkTitle"
    /*                            xtype="textfield"
    /*                              allowBlank="{Boolean}false"
    /*                            emptyText="Link Title"/>
    /*                        </field1>
    /*                    </fieldConfig>
    /*        </links>
    /*
    /*
     */

      validateValue: function(value) {
             if(this.allowBlank){
                 this.clearInvalid();
                 return true;
             }else{
                 if(this.items.items.size() > 1){
                 this.clearInvalid();
                 return true;

                 }
                 else{
                 this.markInvalid(this.blankText);
                 return false;

                 }
             }

        return true;
    },
    
    processRecord: function(record, path) {
    	var rows = new Array();
    	var index = 0;
    	var nodeName = this.getName().replace("./", "");
    	var node = record.get(nodeName);
    	for (var key in node) {
    		if (key != 'jcr:primaryType') {	
    			//the nodes are saved in no particular order, so using the key (name) of the node
    			//to add to the right index of the array so they populate the form correctly
    			var nodePath = nodeName + "/" + key;
    			rows[key] = record.get(nodePath);
    			index++;
    		}
    	}
		this.setValue(rows);
    }
});

CQ.Ext.reg("multifieldmultifield", CQ.form.MultiFieldMultiField);

/**
 * The <code>CQ.form.MultiFieldMultiField.Item</code> class represents an item in a
 * <code>CQ.form.MultiFieldMultiField</code>. This class is not intended for direct use.
 *
 * @private
 * @class CQ.form.MultiFieldMultiField.Item
 * @extends CQ.Ext.Panel
 */
CQ.form.MultiFieldMultiField.Item = CQ.Ext.extend(CQ.form.MultiField.Item, {

    /**
     * Creates a new <code>CQ.form.MultiFieldMultiField.Item</code>.
     * @constructor
     * @param {Object} config The config object
     */     
    constructor: function(config) {
        var item = this;
		var index = config.nodeIndex;
		this.fields = new Array();
		
		var fieldIndex = 0;
        for (var key = 0; key < Object.size(config.fieldConfig) ;key++) {
		//for (var key = 0; key < config.fieldConfig.size();key++) {
			var tempConfig = config.fieldConfig[key];

            if ( (tempConfig) && (tempConfig.name) ) {
                var fieldName = tempConfig.name;
                if (fieldName.indexOf("./") > -1) {
                    fieldName = fieldName.substring(fieldName.lastIndexOf(['/']) + 1);
                }
                if (index != null) {
                    tempConfig.name = config.name + "/" + index + "/" + fieldName;
                } else {
                    tempConfig.name = config.name + "/" + fieldName;
                }
                this.fields[fieldIndex] = CQ.Util.build(tempConfig, true);
                fieldIndex++;
            }
		}

        var items = new Array();
        
        for (var i=0; i< this.fields.length; i++) {
        	items.push({
            	"xtype":"panel",
            	"border":false,
            	"items": this.fields[i]
        	});        	
        }
                 
        if(!config.fieldConfig.readOnly) {
            items.push({
                "xtype":"panel",
                "border":false,
                "items":{
                    "xtype":"button",
                    "text":"Up",
                    "handler":function() {
                        var parent = item.ownerCt;
                        var index = parent.items.indexOf(item);

                        if (index > 0) {
                            item.reorder(parent.items.itemAt(index - 1));
                        }
                    }
                }
            });
            items.push({
                "xtype":"panel",
                "border":false,
                "items":{
                    "xtype":"button",
                    "text":"Down",
                    "handler":function() {
                        var parent = item.ownerCt;
                        var index = parent.items.indexOf(item);

                        if (index < parent.items.getCount() - 1) {
                            item.reorder(parent.items.itemAt(index + 1));
                        }
                    }
                }
            });
            items.push({
                "xtype":"panel",
                "border":false,
                "items":{
                    "xtype":"button",
                    "text":"-",
                    "handler":function() {
                        item.remove(item);
                    }
                }
            });
        }

        config = CQ.Util.applyDefaults(config, {
            "layout":"table",
            "border":false,
            "layoutConfig":{
                "columns": (this.fields.length + 3)
            },
            "defaults":{
                "bodyStyle":"padding:3px"
            },
            "items":items
        });
        CQ.form.MultiField.Item.superclass.constructor.call(this, config);

        if (config.value) {
        	this.setValue(config.value);
        }
    },
    
    /**
     * Reorders the item above the specified item.
     * @param item The item to reorder above
     */
    reorder: function(item) {
    	var vars = new Array();    	
    	for (var i=0; i<item.fields.length; i++) {
    		vars.push(item.fields[i].getValue());
    	} 
    	for (var j=0; j<vars.length; j++) {
    		item.fields[j].setValue(this.fields[j].getValue());
    		this.fields[j].setValue(vars[j]);    		
    	}
    },    
    
    remove: function(item) {
    	var parent = item.ownerCt;
    	var index = parent.items.indexOf(item);
        if (index < parent.items.getCount() - 2) {
            item.reorder(parent.items.itemAt(index + 1));
            item.remove(parent.items.itemAt(index + 1));
        } else {
			parent.remove(item);
        }
    },
    
    /**
     * Returns the data value.
     * @return {String} value The field value
     */
	getValue: function() {
		var value = null;
		for (var i=0; i<this.fields.length; i++) {
			if (i == 0) {
				value = this.fields[0].getValue();
			} else {
				value = value + "|" + this.fields[i].getValue();
			}
		}
		return value;
	},
	    
    /**
     * Sets a data value into the field and validates it.
     * @param {String} value The value to set
     */
    setValue: function(value) {
    	if (value) {
    		var values = value.split(["|"]);
    		for (var i=0; i<values.length; i++) {
    	    	this.fields[i].setValue(values[i]);
    	    }
        }
    },
    
    validate: function() {
    	var isValid = true;
    	if(this.fields) {
            for (var i=0; i<Object.size(this.fields)&&isValid; i++) {
            //for (var i=0; i<this.fields.size()&&isValid; i++) {
	    		if (this.fields[i]) {
	    			isValid = this.fields[i].validate();
	    		}
    		}
		}
		
    	return isValid;
    }
});

CQ.Ext.reg("multifieldmultifielditem", CQ.form.MultiFieldMultiField.Item);

/**
 * The <code>CQ.form.StandardLink</code> composes of a group 
 * 
 * @class CQ.form.StandardLink
 * @extends CQ.form.CompositeField
 */
CQ.form.StandardLink = CQ.Ext.extend(CQ.form.CompositeField, {
    /**
     * @cfg {Object} allowBlank
     * Allow blank.
     */
    allowBlank: false,
    
    displayLinkTextField: true,
    displayLinkTitleField: false,
    displayLinkTargetField: true,
    displayLinkIconField: true,
    
    linkUrlFieldLabel: null,
    linkTextFieldLabel: null,
    linkTitleFieldLabel: null,
    linkTitleFieldDescription: null,
    linkTargetFieldLabel: null,
    linkIconFieldLabel: null,
    fieldDescription: null,

    /**
     * Creates a new <code>CQ.form.StandardLink</code>.
     * @constructor
     * @param {Object} config The config object
     */
    constructor: function(config) {
        var items = new Array();
        
        if(config.allowBlank == null) {
            config.allowBlank = false;
        }
         
        var linkUrlName = config.name + "/linkUrl";
        var linkTextName = config.name + "/linkText";
        var linkTitleName = config.name + "/linkTitle";
        var linkTargetName = config.name + "/linkTarget";
        var linkIconName = config.name + "/linkIcon";
        
        var hideLinkText = (config.displayLinkTextField==null)?false:!config.displayLinkTextField;
        var hideLinkTitle = (config.displayLinkTitleField==null)?true:!config.displayLinkTitleField;
        var hideLinkTarget = (config.displayLinkTargetField==null)?false:!config.displayLinkTargetField;
        var hideLinkIcon = (config.displayLinkIconField==null)?false:!config.displayLinkIconField;
        
        var allowLinkTextBlank = (hideLinkText || config.allowBlank);
        var allowLinkTitleBlank = (hideLinkTitle || config.allowBlank);
        var allowLinkTargetBlank = (hideLinkTarget|| config.allowBlank);
        var allowLinkIconBlank = (hideLinkIcon || config.allowBlank);
                
        items.push({
            "xtype":"pathfield",
            "name":linkUrlName,
            "fieldLabel":config.linkUrlFieldLabel,
            "allowBlank":config.allowBlank,
            "width":"100%"
        });
         
        items.push({
            "xtype":"textfield",
            "name":linkTextName,
            "fieldLabel":config.linkTextFieldLabel,
            "width":"100%",
            "hidden":hideLinkText,
            "hideLabel":hideLinkText,
            "allowBlank":allowLinkTextBlank
        });
        
        items.push({
            "xtype":"textfield",
            "name":linkTitleName,
            "fieldLabel":config.linkTitleFieldLabel,
            "fieldDescription":config.linkTitleFieldDescription,
            "width":"100%",
            "hidden":hideLinkTitle,
            "hideLabel":hideLinkTitle,
            "allowBlank":allowLinkTitleBlank
        });
        
        items.push({
            "xtype":"selection",
            "type":"select",
            "name":linkTargetName,
            "fieldLabel":config.linkTargetFieldLabel,
            "width":"100%",
            "hidden":hideLinkTarget,
            "hideLabel":hideLinkTarget,
            "allowBlank":allowLinkTargetBlank,
            "options":[
                {
                    "text":"Current Window",
                    "value":"_self"
                },
                {
                    "text":"New Window",
                    "value":"_blank"
                }
            ]
        });
        
        items.push({
            "xtype":"selection",
            "type":"checkbox",
            "name":linkIconName,
            "fieldLabel":config.linkIconFieldLabel,
            "hidden":hideLinkIcon,
            "hideLabel":hideLinkIcon,
            "allowBlank":allowLinkIconBlank
        });
        
        items.push({
            "xtype":"hidden",
            "name":linkIconName+"@TypeHint",
            "ignoreData":true,
            "value":"Boolean"
        });
        
        config = CQ.Util.applyDefaults(config, {
            "xtype":"panel",
            "fieldDescription":config.fieldDescription,
            "items":items
        });
        
        CQ.form.StandardLink.superclass.constructor.call(this,config);
    },
    
    /**
     * Returns the data value.
     * @return {String} value The field value
     * @member CQ.form.MultiField.Item
    getValue: function() {
        return "test";
    }, 
     */
     
    
    

    /**
     * Sets a data value into the field and validates it.
     * @param {String} value The value to set
     * @member CQ.form.MultiField.Item
     */
    setValue: function(value) {
        var oldItems = this.items.items;
        oldItems[0].setValue(value.linkUrl);
        oldItems[1].setValue(value.linkText);
        oldItems[2].setValue(value.linkTitle);
        oldItems[3].setValue(value.linkTarget);
        oldItems[4].setValue(value.linkIcon);
    },
    
    
    
    validate: function() {
        
        return true;
    }
});

CQ.Ext.reg("standardlink", CQ.form.StandardLink);

