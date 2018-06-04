# ContactInfoManager

![alt text](https://github.com/vishalpherwani/ContactInfoManager/blob/master/ContactManagerUI.png)

# Deployment procedure

a.	The application api for demo purposes is using in memory cache for now so that one can have a look at the overview of the app without database, all CRUD operations are still supported in in-memory cache, but still the app is having an option to connect to database via entity framework and is production ready.
b.	Deploy the UI package to the IIS with name as CMUI
c.	Deploy the REST api package to the IIS with name as CM_RestApi
d.	The appSettings file in the UI_Package\assets contains the baseURI path which a configuration to point to the URL where the api is hosted and is accessible.

# Detailed document

ContactManagerSolution.docx
