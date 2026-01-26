# law3.0
Practice Next.Js Project that mimics the current functionality of TIs LAWNDA

User Story for LAWNDA 3.0:

1.  [X] Provide the ability to search the datatable by NDA ID
2.  [ ] Add role based access for admin and user(view only) permissions
3.  [X] Add SSO Login
4.  [ ] Provide users the ability to export via Excel and PDF
5.  [X] Datatable should be able to be filtered and sorted by column
6.  [X] NDA should have an ID, type, agreement type, end date, requester name and status
7.  [X] All users can view NDAs
8.  [ ] Admins can restrict and grant access to the website
9.  [ ] Datatable should be able to adjust the number of NDAs shown on one page
10. [X] Data table should be able to select X number of NDAs and show count
11. [X] Provide a logout option
12. [X] Add a current user page with access level and user info (eg. name, ID, email, access level)

------------------------------------------------------------------------------------------------------------------
Requirements:
-

Users: 
This application allows for two different types of users such as Admin and User.

Admin(Super User) capabilities:
1. Admin users have the ability to manage and create their team with the user management page.
2. Admin users should be able to add users and remove users from the user management page.
3. Admin users will have visibility to all data from the home page and be able to edit it. 

User capabilities:
1. Regular Users have view only access in the user management page.
2. Users can modify their personal data in the user management page
3. Users can view all members of their team and role types in the user management page.
4. Users can view only the data from the home page.  

Non-Goals:
-

Out of Scope Items:
- We will not be rolling out the ability for super users to manage multiple teams
- We will not be rolling out the ability for teams to perform tasks or assign tasks
- We will not be rolling out the ability to upload data from the frontend. All data will be loaded from the backend in this phase.

------------------------------------------------------------------------------------------------------------------
Core Features:
-
1. User management
   - Roles: Admin(Super User) and User (limited - view only)
2. Data table of submitted NDAs
   - database should include audit trail of who updated the record and when 

Authentication:
- 
->>> Add more details here

Data Presistance:
- 
->>> Add more details here

------------------------------------------------------------------------------------------------------------------

System Diagram
-
->>> include diagram of the app flow


------------------------------------------------------------------------------------------------------------------


Data Model
-
->>> include data model of how data flows thoughout the application





