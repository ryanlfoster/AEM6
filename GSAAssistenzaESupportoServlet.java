package ne.skysupport.servlet;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.StringWriter;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.text.MessageFormat;
import java.util.Hashtable;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletResponse;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.apache.commons.io.FileUtils;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.sling.SlingServlet;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.w3c.dom.Document;
import org.w3c.dom.Element;

import com.sky.shaker.cinema.gsa.servlet.GSAMovieSearchBaseServlet;
import com.sky.shaker.cinema.gsa.util.GSAConstants;

@SlingServlet(paths={"/services/GSAAssistenzaESupporto/gsaAssistenza.do"}, label= "ne.skysupport.servlet.gsaAssistenza",description = "GSAAssistenzaESupporto - GSAAssistenzaESupporto servlet", metatype=true)


@Properties({
	@Property(name="application-path", value="sky/cinema/GSAMovieSearch",propertyPrivate=false),
    @Property(name="application-properties", value="/config/webapp.properties",propertyPrivate=false),
    @Property(name="error.page", value="/config/error.txt",propertyPrivate=false),
    @Property(name="sky-style-sheet", value="/config/cinema_style_sheet.xsl",propertyPrivate=false),
    @Property(name="num_risultati_parziali", value="3",propertyPrivate=false)
})


public class GSAAssistenzaESupportoServlet extends GSAMovieSearchBaseServlet  {
	
	private static final long serialVersionUID = -651021388016906206L;
	static final
	private String	PARAM_Q 				= "q",
					PARAM_START				= "start",
					PARAM_NUM				= "num",
					PARAM_START_VALUE 		= "0",
					PARAM_NUM_VALUE 		= "10",
					PARAM_SECTION 			= "collection",
					COLLECTION_SAPERE 			= "skyItMag",
					COLLECTION_GESTIRE 		= "skyItMag",
					COLLECTION_RISOLVERE 		= "skyItMag";
	
	
	protected void doGet( SlingHttpServletRequest request, SlingHttpServletResponse response ) throws ServletException, IOException { 

		
		if ( isRequestParameterNullAndEmpty(request, PARAM_Q))
		{
		
			this.logger.debug( "Nessun parametro specificato per la ricerca" );
			response.sendError( HttpServletResponse.SC_BAD_REQUEST );
			return;	
		}
		
		StringBuffer url_generic = new StringBuffer();
		StringBuffer url_sky_section_sapere = null;
		StringBuffer url_sky_section_gestire = null;
		StringBuffer url_sky_section_risolvere = null;
		String collection = "";
		if ( !isRequestParameterNullAndEmpty(request, PARAM_Q)) {
			String start = URLDecoder.decode(getRequestParameterDefault(request, PARAM_START, PARAM_START_VALUE), "ISO-8859-1");
			String num = URLDecoder.decode(getRequestParameterDefault(request, PARAM_NUM, PARAM_NUM_VALUE), "ISO-8859-1");
			String q = URLDecoder.decode(request.getParameter(PARAM_Q), "ISO-8859-1");
			collection = URLDecoder.decode(getRequestParameterDefault(request, PARAM_SECTION, ""), "ISO-8859-1");
			
			url_generic.append(prop.getProperty("base.url"))
			.append("q=")
			.append(q)
			.append("&")
			.append(PARAM_START)
			.append("=")
			.append(start)
			.append("&lr=lang_it")
			.append("&output=")
			.append(GSAConstants.OUTPUT)
			.append("&client=")
			.append(GSAConstants.DEFAULT)
			.append("&")
			.append("filter=")
			.append(GSAConstants.FILTER);
//			.append("&")
//			.append(GSAConstants.GET_META)
//			.append("=")
//			.append(GSAConstants.META_DATA);
			if(collection.equals(""))
			{
				url_generic.append("&")
				.append("num=")
				.append("3");
			}
			else
			{
				url_generic.append("&")
				.append("num=")
				.append("10");
			}
			
			url_sky_section_sapere = new StringBuffer(url_generic.toString());
			url_sky_section_gestire = new StringBuffer(url_generic.toString());
			url_sky_section_risolvere = new StringBuffer(url_generic.toString());
			url_sky_section_sapere.append("&site=").append(COLLECTION_SAPERE);
			url_sky_section_gestire.append("&site=").append(COLLECTION_GESTIRE);
			url_sky_section_risolvere.append("&site=").append(COLLECTION_RISOLVERE);
		}
		/* Recupero i request headers */
		Map<String, String> requestHeaderMap = new Hashtable<String, String>();
		requestHeaderMap.put("accept-language", "it-it,it");
		requestHeaderMap.put("accept", "text/html,application/xhtml+xml,application/xml");
		requestHeaderMap.put("accept-charset", "ISO-8859-1,utf-8");
		requestHeaderMap.put("user-agent", request.getHeader("user-agent"));
		
		this.logger.debug( MessageFormat.format("GSAAssistenzaESupportoSearchServlet - requestHeader: {0}  ", requestHeaderMap));
		
		
		
		
		byte[] data =null;
		try {
			if(collection.equals(""))
			{
				data = getAllSectionsResults( requestHeaderMap, url_sky_section_sapere.toString(), url_sky_section_gestire.toString(), url_sky_section_risolvere.toString());
			}
			else if(collection.equals(COLLECTION_SAPERE))
			{
				data = getSingleSectionResults( requestHeaderMap, url_sky_section_sapere.toString(),COLLECTION_SAPERE);
			}
			else if(collection.equals(COLLECTION_GESTIRE))
			{
				data = getSingleSectionResults( requestHeaderMap, url_sky_section_gestire.toString(),COLLECTION_GESTIRE);
			}
			else if(collection.equals(COLLECTION_RISOLVERE))
			{
				data = getSingleSectionResults( requestHeaderMap, url_sky_section_risolvere.toString(),COLLECTION_RISOLVERE);
			}
		} catch (ParserConfigurationException e) {
		
			e.printStackTrace();
		} catch (TransformerException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		response.setContentType( "text/html" );
		response.setContentLength( data.length );
		response.getOutputStream().write( data );
		
	}
	
	
	private byte[] getAllSectionsResults( Map<String, String> requestHeaderMap, String url_sky_section_sapere, String url_sky_section_gestire, String url_sky_section_risolvere) throws IOException, ParserConfigurationException, TransformerException
	{
		ByteArrayOutputStream bos = new ByteArrayOutputStream();
		bos = getXMLDocumentForSections( bos,url_sky_section_sapere, url_sky_section_gestire, url_sky_section_risolvere, requestHeaderMap);
		return bos.toByteArray();
	}
	
	private byte[] getSingleSectionResults( Map<String, String> requestHeaderMap, String url_section, String collection) throws IOException, ParserConfigurationException, TransformerException
	{
		ByteArrayOutputStream bos = new ByteArrayOutputStream();
		bos = getXMLDocumentForSingleSection( bos,url_section, requestHeaderMap, collection);
		return bos.toByteArray();
	}
	
	private ByteArrayOutputStream getXMLDocumentForSingleSection(ByteArrayOutputStream bos, String url_section, Map<String, String> requestHeaderMap, String collection) throws IOException, ParserConfigurationException, TransformerException
	{
		/* Recupero il document XML con i risultati della ricerca */
		Document document = getSearchResultDocument( url_section, null, false, requestHeaderMap);
		Document wrapped = getWrappedXML(document, collection);
		return createXml(wrapped, bos);
	}
	private ByteArrayOutputStream getXMLDocumentForSections(ByteArrayOutputStream bos, String url_sky_section_sapere, String url_sky_section_gestire, String url_sky_section_risolvere, Map<String, String> requestHeaderMap) throws IOException, ParserConfigurationException, TransformerException
	{
		
		/* Recupero i documenti XML con i risultati della ricerca */
		Document document_sapere = getSearchResultDocument( url_sky_section_sapere, null, false, requestHeaderMap);
		Document document_gestire = getSearchResultDocument( url_sky_section_gestire, null, false, requestHeaderMap);
		Document document_risolvere = getSearchResultDocument( url_sky_section_risolvere, null, false, requestHeaderMap);
		Document wrapped = getWrappedXML(document_sapere,document_gestire,document_risolvere);
		
		return createXml(wrapped, bos);
	}
	
	private ByteArrayOutputStream createXml(Document document, ByteArrayOutputStream bos) throws UnsupportedEncodingException, IOException
	{
		if (document == null) {
			//String errorPage = prop.getProperty( "error.page" );
			String errorPage = FileUtils.readFileToString(new File(confPath+applicationPath+this.errorPage)); 
			bos.write( errorPage.getBytes("UTF-8") );
			bos.flush();
			//response.sendRedirect(errorPage);
			//return;
		}
		else 
		{
			Element elRoot = document.getDocumentElement();
			if ( elRoot != null ) {				
				String xslFilename = confPath+applicationPath+styleSheet;
				// 
				String res = applyXslToDocument( document, xslFilename );
				res = res.contains("<?xml version=\"1.0\" encoding=\"UTF-8\"?>") ? res.substring("<?xml version=\"1.0\" encoding=\"UTF-8\"?>".length(),res.length()) : res;
				if ( res != null ) {
					bos.write( res.getBytes("UTF-8") );
					bos.flush();
				} else 
					bos.reset();
			}		
		}
		return bos;
	}
	private Document getWrappedXML(Document document_sapere, Document document_gestire, Document document_risolvere) throws ParserConfigurationException, IOException, TransformerException
	{
		Element oldRootSapere = document_sapere.getDocumentElement();
		Element oldRootGestire = document_gestire.getDocumentElement();
		Element oldRootRisolvere = document_risolvere.getDocumentElement();
		DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        DocumentBuilder builder = factory.newDocumentBuilder();
        Document output = builder.newDocument();
        Document newDocSapere = builder.newDocument();
		Document newDocGestire = builder.newDocument();
		Document newDocRisolvere = builder.newDocument();
		Element rootOutput = output.createElement("risultati");
        Element newRootSapere = newDocSapere.createElement("risultatisapere");
        Element newRootGestire = newDocGestire.createElement("risultatigestire");
        Element newRootRisolvere = newDocRisolvere.createElement("risultatirisolvere");
        newDocSapere.appendChild(newRootSapere);
        newRootSapere.appendChild(newDocSapere.importNode(oldRootSapere, true));
        newDocGestire.appendChild(newRootGestire);
        newRootGestire.appendChild(newDocGestire.importNode(oldRootGestire, true));
        newDocRisolvere.appendChild(newRootRisolvere);
        newRootRisolvere.appendChild(newDocRisolvere.importNode(oldRootRisolvere, true));
        rootOutput.appendChild(output.importNode(newDocSapere.getDocumentElement(), true));
        rootOutput.appendChild(output.importNode(newDocGestire.getDocumentElement(), true));
        rootOutput.appendChild(output.importNode(newDocRisolvere.getDocumentElement(), true));
        output.appendChild(rootOutput);
        printDocument(output);
        return output;
	}
	private Document getWrappedXML(Document document, String collection) throws ParserConfigurationException, IOException, TransformerException
	{
		Element oldRoot = document.getDocumentElement();
		DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        DocumentBuilder builder = factory.newDocumentBuilder();
        Document output = builder.newDocument();
      
		Element newRoot = null;
		if(collection.equals(COLLECTION_SAPERE))
		{
			newRoot = output.createElement("risultatisapere");
		}
		else if(collection.equals(COLLECTION_GESTIRE))
		{
			newRoot = output.createElement("risultatigestire");
		}
		else if(collection.equals(COLLECTION_RISOLVERE))
		{
			newRoot = output.createElement("risultatirisolvere");
		}
		newRoot.appendChild(output.importNode(oldRoot, true));
		output.appendChild(newRoot);
		printDocument(output);
        return output;
	}
	private Element setSingleAttribute(Element e)
	{
		e.setAttribute("isSingle", "true");
		return e;
	}
	
	public void printDocument(Document doc) throws IOException, TransformerException {
	    TransformerFactory tf = TransformerFactory.newInstance();
	    Transformer transformer = tf.newTransformer();
	    transformer.setOutputProperty(OutputKeys.OMIT_XML_DECLARATION, "no");
	    transformer.setOutputProperty(OutputKeys.METHOD, "xml");
	    transformer.setOutputProperty(OutputKeys.INDENT, "yes");
	    transformer.setOutputProperty(OutputKeys.ENCODING, "UTF-8");
	    transformer.setOutputProperty("{http://xml.apache.org/xslt}indent-amount", "4");

	   
	  //create a StringWriter for the output
	    StringWriter outWriter = new StringWriter();
	    StreamResult result = new StreamResult( outWriter );
	    transformer.transform( new DOMSource(doc), result );  
	    StringBuffer sb = outWriter.getBuffer(); 
	    String finalstring = sb.toString();
	    logger.debug(finalstring);
	}
	@Override
	protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response) 
	throws ServletException, IOException { 
		doGet(request, response);
	}

}