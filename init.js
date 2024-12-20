const treeArea = document.getElementById("tree-area");

let draggedItem = null;
let selectedNodes = [];
let connections = [];
let lines = [];
let nodesInTree = [];

// Add event listeners to all draggable items
document.querySelectorAll(".draggable").forEach(item => {
    item.addEventListener("dragstart", handleDragStart);
    item.addEventListener("dragend", handleDragEnd);
});

// Setup event listeners for the tree area
treeArea.addEventListener("dragover", handleDragOver);
treeArea.addEventListener("drop", handleDrop);

// Export any variables or functions that you want to use in another file
// export { draggedItem, selectedNodes, connections, lines, nodesInTree };
// Handle when an item starts being dragged
function handleDragStart(e) {
    draggedItem = this;
    // console.log("drag start");
    setTimeout(() => this.classList.add("hidden"), 0);
}

// Handle when dragging ends
function handleDragEnd(e) {
    this.classList.remove("hidden");
    draggedItem = null;
}

// Allow items to be dragged over the tree area
function handleDragOver(e) {
    e.preventDefault();
    // console.log("hello");
}

// Handle when an item is dropped in the tree area
function handleDrop(e) {
    e.preventDefault();
    const dropX = e.clientX - treeArea.offsetLeft;
    const dropY = e.clientY - treeArea.offsetTop;

    if (draggedItem) {
        const itemType = draggedItem.getAttribute("data-type");

        if (itemType === "node") {
            let value = prompt("Enter name of this node");
            draggedItem.setAttribute("data-value", value);
            const nodeValue = value;
            createNode(dropX, dropY, nodeValue);
            nodesInTree.push(nodeValue);  // Store node name in nodesInTree array
        }
    }
}