# Overview
This project aims to create an immersive virtual reality (VR) experience using A-Frame. The VR scene incorporates a custom JavaScript component for scroll-hold rotation and another component for rotating an object on hover. The scene includes basic shapes from the A-Frame library and 3D models (a house and a parrot) to enhance the user experience.
![image](https://github.com/dev-sujan/a-frame-assignment/assets/121967553/fc1bb0c0-b468-46ea-a33f-45c3ebe7c377)


# [Live](https://dev-sujan.github.io/a-frame-assignment/) 
### [https://dev-sujan.github.io/a-frame-assignment/](https://dev-sujan.github.io/a-frame-assignment/)

# Features
### 1. Scroll-Hold Rotation Component:

- Enables users to rotate the parrot model by holding the middle scroll button and moving the mouse.
- Custom JavaScript component: `scroll-hold-rotation.js.`

### 2. Aesthetically Pleasing Scene:

- Includes a sky background color to enhance the visual appeal.

### 3. User Guidance:

- Provides text instructions within the scene to guide users on how to interact.
### 4. Basic Shapes and 3D Models:

- Utilizes A-Frame assets to incorporate basic shapes and 3D models.


--------

# Setup
1. Clone the repository:

    ```bash
    git clone https://github.com/dev-sujan/a-frame-assignment.git
    ```
2. Open the index.html file in a web browser that supports WebVR.

3. Interact with the VR scene using the specified instructions.

# Components
## 1. Scroll-Hold Rotation Component
The `scroll-hold-rotation` component enables users to rotate the parrot model by holding the middle scroll button and moving the mouse.

**Usage:**
```html
<a-gltf-model src="#parrot" position="0 6 -5" rotation="28 -36 0" scroll-hold-rotation></a-gltf-model>
```
