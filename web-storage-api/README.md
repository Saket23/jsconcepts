# WebStorage API


## Session Storage

```
Session storage data are not persistent when tabs are closed
In session storage can store 5 MB of data and data in session storage is not used to make an api call.
```

## Local Storage

```
In local storage even if you shut down the system and comeback and visit the same web browser the data will be persistent in local storage.  
It has highest memory capacity in comparison to session storage and cookies
```

```
local storage and session storage are stored in the window object of the browser.
They store data base on same origin policy.

same origin policy contains three things
1. Protocol : (HTTP/HTTPS)
2. Host : (Flipkart.com )
3. Port : 8080/8081
```

# Cookies
```
In cookies we can store 400 bytes of data and data in cookies can be used to make an api call.
Cookies are sent with every request, so they can worsen performance
Cookies can be set by a server side language by using set cookie
If we don’t provide expire details it will create a session cookie and will expire when client shuts down.
This one will expire cookie when mentioned:
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;
```