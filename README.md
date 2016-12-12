# w205-webapp
MEAN stack application for W205 Final Project

## To Reconstitute the Web App

AWS Instance Details
- Free Tier t2.micro should be sufficient
- Requires a security group with an open port at 3000
- Create instance using **_ami-63393474_** ( W205 Web App )
- Be aware that since this is a modified Linux distribution, the connect string will use 'root' by default. This needs to be changed to 'ubuntu' as the web app is running off Ubuntu 14.04.

## Once Connected to Instance

In the '/home/ubuntu' directory, as the 'ubuntu' user, run the following commands:

```
git clone https://github.com/mattbryanswan/w205-webapp
cd w205-webapp
npm start
```

The application is now started. It is accessible:

```
http://public-ip-of-instance:3000
```
