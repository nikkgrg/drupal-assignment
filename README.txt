# Drupal Assignemnt

## Introduction
This module has two webforms with 5 different fields, a simple form submitted by AJAX,
a custon content and a view.
Web form1 : Employee form - http://localhost/?q=node/3
Web form2 : User Form - http://localhost/?q=node/2
Ajax Form : http://localhost/?q=myform
     List : http://localhost/?q=myform/list
Custom Form : Go to configuration tab and you can see under User interface tab.
View	: It can be seen in main menu.

## Requirements
- Drupal 7.x orabove
- Entity API module (7.x-1.x)
- Views module
- Webforms module
- ctools 


## Installation
1. git clone https://github.com/nikkgrg/drupal-assignment
2. Download the modules and place it in `sites/all/modules/
3. Go to Admin > Modules and enable the modules.

## Database
A sample database file is located in the `/database/` directory:
-CREATE DATABASE demo;
-mysql -u <db_username> -p demo < demo.sql
