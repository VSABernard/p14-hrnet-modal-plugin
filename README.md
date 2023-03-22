![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)

# **Modal validate component**

This is a simple and reutilisable React component fullscreen modal validate, developed as part of OpenClaasrooms training program for the 14th project. <br> Its job is very basic ➡️ to **display an alert when a form is validated**.

## **_Prerequisites_**

To use this component, you need : 
* A text editor like : [VSCode](https://code.visualstudio.com/)
* [NodeJS > v.16](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

## **_Installation_**

```diff
$ npm install p14-modal-validate-plugin
```
```diff
$ yarn add p14-modal-validate-plugin
```

## **_How the plugin works_**

### **_Import module_**

```diff
import ModalValidate from 'p14-modal-validate-plugin'
```

### **_Render your modal into your component_**

```diff
return (  
  <>
    <ModalValidate />
  <>
)
```

### **_Props_**
This component uses three kinds of props :
* **show**  : Boolean ▶️ manage the modal's display
* **onClose** : Function ▶️ handle the close's event
* **message** : String ▶️ display the alert message

Exemple : 
```diff
  <ModalValidate show={true}/>
```
## **_Compatibility_**

This component was created with the last version of React (v18.2.0).

🤓 If you want to know more about this plugin, feel free to contact me !