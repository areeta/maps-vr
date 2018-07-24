# run: dev_appserver.py app.yaml
import webapp2
import jinja2
import os

# Dyanmic things => use main.py to add in page links

env = jinja2.Environment(
    loader = jinja2.FileSystemLoader(os.path.dirname(__file__)))

class About(webapp2.RequestHandler):
    def get(self): #for a get request
        template = env.get_template("templates/about.html")
        self.response.write(template.render()) #the response

class AFrame(webapp2.RequestHandler):
    def get(self): #for a get request
        template = env.get_template("templates/aframe.html")
        self.response.write(template.render()) #the response

class Contact(webapp2.RequestHandler):
    def get(self): #for a get request
        template = env.get_template("templates/contact.html")
        self.response.write(template.render()) #the response

class Index(webapp2.RequestHandler):
    def get(self):
        template = env.get_template("templates/index.html")
        self.response.write(template.render()) #the response

app = webapp2.WSGIApplication([
    ("/", Index), #this maps the root url to the Index Handler
    ("/about", About),
    ("/aframe", AFrame),
    ("/contact", Contact),
], debug=True)
