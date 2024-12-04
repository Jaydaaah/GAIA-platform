import { Edge, Node, NodeTypes, Position, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { CSSProperties } from "react";
import CustomNode from "./CustomNode";

const background = "#31511E";
const color = "$ffffff";

const style: CSSProperties = {
    background,
    color,
    padding: "10px",
    borderRadius: "5px",
    borderWidth: "0px",
};

const initialNodes: Node[] = [
    // Planning Phase
    {
        id: "1",
        position: { x: 0, y: 123 },  // Changed x for horizontal alignment
        targetPosition: Position.Left,
        sourcePosition: Position.Right,
        data: { label: "Concept Phase" },
        style,
        connectable: false
    },
    {
        id: "2",
        position: { x: 200, y: 100 },  // Adjust x for horizontal layout
        targetPosition: Position.Bottom,
        sourcePosition: Position.Top,
        data: { label: "Planning (Sprint 0)" },
        style,
        connectable: false
    },

    // Development Phase
    {
        id: "3",
        position: { x: 400, y: -9 },  // Adjust x for horizontal layout
        targetPosition: Position.Left,
        sourcePosition: Position.Right,
        data: { label: "Development (Iterations)" },
        style,
        connectable: false
    },
    {
        id: "4",
        position: { x: 600, y: 0 },  // Adjust x for horizontal layout
        targetPosition: Position.Left,
        sourcePosition: Position.Right,
        data: { label: "Testing Phase" },
        style,
        connectable: false
    },

    // Review/Feedback Phase
    {
        id: "5",
        position: { x: 800, y: 100 },  // Adjust x for horizontal layout
        targetPosition: Position.Top,
        sourcePosition: Position.Bottom,
        data: { label: "Review/Feedback" },
        style,
        connectable: false
    },

    // Delivery Phase
    {
        id: "6",
        position: { x: 600, y: 200 },  // Adjust x for horizontal layout
        targetPosition: Position.Right,
        sourcePosition: Position.Left,
        data: { label: "Delivery Phase" },
        style,
        connectable: false
    },

    // Maintenance Phase
    {
        id: "7",
        position: { x: 400, y: 200 },  // Adjust x for horizontal layout
        targetPosition: Position.Right,
        sourcePosition: Position.Left,
        data: { label: "Maintenance Phase" },
        style,
        connectable: false
    },
];


const initialEdges: Edge[] = [
    { id: "e1-2", source: "1", target: "2", animated: true },
    { id: "e2-3", source: "2", target: "3", animated: true},
    { id: "e3-4", source: "3", target: "4", animated: true},
    { id: "e4-5", source: "4", target: "5", animated: true},
    { id: "e5-6", source: "5", target: "6", animated: true},
    { id: "e6-7", source: "6", target: "7", animated: true},
    { id: "e5-2", source: "5", target: "2", animated: true},
    { id: "e7-2", source: "7", target: "2", animated: true},

];

export default function AgileFlowChart() {
    return <ReactFlow nodes={initialNodes} edges={initialEdges} fitView/>;
}
