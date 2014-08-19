private void initNodeInformation() throws AccessDeniedException, ItemNotFoundException, RepositoryException
	{
		String path = getCurrentPage().getPath(); 
		Node node = getResource().adaptTo(Node.class);
		Node noddd = getCurrentPage().getContentResource().adaptTo(Node.class);
		
		log.debug("#####################->" + node.toString());
		log.debug("#####################->" + noddd.toString());
		
		}
