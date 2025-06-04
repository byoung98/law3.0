"use client";

import React from "react";

interface ColumnFilterStateProps {
    filterValue: string;
    onFilterChange: (value: string) => void;
}

export function ColumnFilterState({ filterValue, onFilterChange }: ColumnFilterStateProps) {
    return (
        <div className="flex items-center space-x-2">
            <input
                type="text"
                value={filterValue}
                onChange={(e) => onFilterChange(e.target.value)}
                placeholder="Filter..."
                className="border rounded px-2 py-1"
            />
        </div>
    );
}