![Screenshot of the landing page](https://i.imgur.com/SXiOhRV.png)

# Album Viewer Admin Panel - Angular 
The Album Viewer Admin Panel is an administrative dashboard designed to manage the content of an album viewer site.

Future enhancements include a full CRUD system, interactive action buttons for creating, editing, and deleting entries, and an authentication system for secure user management.

# Demo
> Add link for live demo

## Features
- **Chart**: Presents a summary of artists and the number of albums associated with each.
- **Artist List**: Lists all artists with links to their individual album lists.
- **Album List**: Displays albums for a selected artist, with links to track details.
- **Song Details**: Provides a list of songs for a given album.
- **Category Overview**: Lists all categories for easy navigation and management.
- **Responsive Design**: Accessible on any device, offering a seamless user experience whether you're on mobile or desktop.

##Future Plan
  - **CRUD System**: Implement a complete system for creating, reading, updating, and deleting entries.
  - **Action Buttons**: Add interactive buttons for performing CRUD operations.
  - **Login System**: Introduce authentication to secure access to the admin panel.
  
## Technologies
- **Angular**: Leveraging the power of Angular for a responsive and interactive frontend.
- **CoreUI**: Employs CoreUI's Angular library for pre-built UI components.
- **ngx-pagination**: Implementing efficient pagination for handling large album lists.
- **HttpClientModule**: Streamlining communication with backend services.

## Setup
To set up the development environment and run the Album Viewer Site locally:
```
git clone https://github.com/ErminaTrontzou/Album-Viewer-Admin-Panel.git
cd Album-Viewer-Admin-Panel
npm install
ng serve
```
Visit `http://localhost:4200/` in your web browser to interact with the application.

## Project Structure
The application is structured using Angular's modular approach, ensuring a clean separation of concerns. The AppModule declares the main application component and several container components, such as headers, footers, and the default layout. The ModulesModule contains the views for artists, categories, albums, and songs, along with their corresponding components.

![Project Structure](https://i.imgur.com/hgf8wY1.png)

## License
The Album Viewer Site is licensed under the MIT license, promoting open-source collaboration and reuse.
