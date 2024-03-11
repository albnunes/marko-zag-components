# Tree Component Documentation in Marko JS

## Overview

This document provides a comprehensive guide to implementing a tree component with Marko JS. The component leverages `@zag-js/tree-view` for creating interactive and accessible tree structures, and is structured into a main `Tree` component, with `Branch`, `Item`, and `Action` sub-components for flexibility and reusability.

### Tree Component (`Tree.marko`)

The root component that orchestrates the display and functionality of the tree structure.

#### Properties

- **id** (string, required): Unique identifier for the tree instance.
- **class** (string, optional): Custom class for styling purposes.
- **renderBody** (Marko.Body, optional): Custom content that can be rendered inside the tree structure.
- **branch** (`BranchInput`[], optional): Array of branches to be rendered within the tree.
- **item** (`ItemInput`[], optional): Array of items to be rendered within the tree.
- **action** (`ActionInput`[], optional): Array of actions applicable to the tree.

#### Example Usage

```marko
<Tree id="myTree" class="custom-tree" branch=[...] item=[...] action=[...] />

```

# Branch Component (`Branch.marko`)

Represents a branch within the tree, capable of holding items, nested branches, and actions.

## Properties

- **branchProps** (object, required): Contains id, depth, and optionally disabled.
- **class** (string, optional): CSS class for the branch.
- **name** (string, optional): Name or label of the branch.
- **renderBody** (Marko.Body, optional): Slot for custom content.
- **branch** (`Input`[], optional): Nested branches.
- **item** (`ItemInput`[], optional): Items within the branch.
- **action** (`ActionInput`[], optional): Actions linked to the branch.

## Example Usage

```marko
<Branch branchProps={ id: "branch1", depth: 1 } name="Branch 1" item=[...] />
```

# Item Component (`Item.marko`)

Defines an item within a branch, containing properties for identification and customization.

## Properties

- **branchProps** (object, required): Includes depth, id, and optionally disabled.
- **class** (string, optional): Custom styling class.
- **name** (string, optional): Label of the item.
- **renderBody** (Marko.Body, optional): Custom content rendering slot.
- **action** (`ActionInput`[], optional): Actions applicable to the item.

## Example Usage

```marko
<Item branchProps={ id: "item1", depth: 2} name="Item 1" />
```
# Action Component (`Action.marko`)

Allows adding interactive elements or actions to branches or items for enhanced user interaction.

## Properties

- **renderBody** (Marko.Body, optional): Custom content or interaction elements.
- **class** (string, optional): Styling class.
- **onClick** ((target: PointerEvent) => void, optional): Click event handler.

## Example Usage

```marko
<Action class="action-button" onClick=(event) => { /* Handle click */ } />