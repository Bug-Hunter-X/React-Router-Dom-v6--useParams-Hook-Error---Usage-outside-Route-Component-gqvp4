# React Router Dom v6: useParams Hook Error

This repository demonstrates a common error when using the `useParams` hook in React Router Dom v6. The error occurs when trying to use `useParams` outside of a component rendered within a `<Route>` element.  The solution shows how to correctly use the hook within the context of a route component.

## Problem

The `useParams` hook requires the routing context provided by React Router. If you try to use it outside this context, it will return `undefined`, leading to runtime errors.

## Solution

To solve this, ensure you use the `useParams` hook inside a component that is rendered within a `<Route>` element.  The provided solution shows this correct usage.