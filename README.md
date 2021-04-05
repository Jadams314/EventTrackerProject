# EventTrackerProject


### About
As a motorcycle rider I love to share and store my favorite rides around the world.
This application will allow motorcycle riders to post their favorite rides, view other rides,
and delete their post.


### Technology Used
* Spring boot
* RESTful
* JSON
* JPA
* MySQL
* Tomcat
* AWS EC2



### Rest Endpoints

HTTP Method | Resource URI | Request Body | Returns |
|-------------|--------------|--------------|---------|
| GET         | `api/rides` |              | a list of all posted rides|
| GET         | 'api/rides/{id}'|           | a ride post related to a specific id|
| POST        | 'api/rides' | JSON form of post | the post sent by the user|
| POST        | 'api/rides/{id}'| JSON form of post | an updated version of a post |
| Delete      | 'api/rides/{id}'|            | deletes a post by id|
