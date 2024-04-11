# namespace

```ts
// Drag & Drop Interfaces
namespace App {
  export interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
  }

  export interface DragTarget {
    dragOverHandler(event: DragEvent): void;
    dropHandler(event: DragEvent): void;
    dragLeaveHandler(event: DragEvent): void;
  }
  // you can put anything here
}
```

```ts
/// <reference path="drag-drop-interfaces.ts"/>
/// <reference path="project.model.ts"/>
namespace App {
  // Project Type

  // Project State Managemt
  type Listener<T> = (items: T[]) => void;

  class State<T> {
    protected listeners: Listener<T>[] = [];

    addListener(listenerFn: Listener<T>) {
      this.listeners.push(listenerFn);
    }
  }
  ...
}
```

- This have a problem, the namespace is TS feature only, when compile to JS it will be destroyed.
- Solution 1:
  - tsconfig.json - "outFile": "bundle.js" // combine all files js compiled into one file - "module": "amd" // use requirejs to load the file
    > may be you meet this error: Cannot find module 'undici-types'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?
    > Solution: add "moduleResolution": "node" to tsconfig.json
