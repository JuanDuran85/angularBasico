# Basic Angular

Basic Angular examples. 

## Generate new project

```
ng new project_name
```

## General Component:

1. General Component
```
ng g c component_name
```
2. Component without tests
```
ng g c component_name --skipTests
```

## Generate new module
1. General Module
```
ng g m module_name
```

2. Module without creating a folder - (--flat) To prevent the creation of a folder
```
ng g m module_name --flat
```

3. Module for child routes
```
ng g m module_name --routing
```

## Generate Service
```
ng g s service_name
```

## Generate Guards
```
ng g guard guard_name
```

## Generate Pipes
```
ng g pipe pipe_name
```

## Build for production
```
 ng build --prod
```

## Run the project

1. To run the application locally during development:
```
ng serve
```

2. You can also specify a custom port:
```
ng serve --port 4201
```