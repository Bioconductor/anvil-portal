/*
 * The AnVIL
 * https://www.anvilproject.org
 *
 * The AnVIL - a React Context object for sharing dashboard search query results.
 * Used to filter the dashboard dataset.
 */

// Core dependencies
import React from "react";

const ContextDashboardFilter = React.createContext({
    checkboxGroups: [],
    countLabel: "",
    entities: [],
    inputValue: "",
    setOfCountResultsByFacet: new Map(),
    setOfResults: new Set(),
    setOfResultsBySearchGroups: new Map(),
    summaries: [],
    tableHeadersEntities: [],
    tableHeadersSummary: [],
    termsChecked: new Map(),
    termsCount: new Map(),
    onHandleChecked: () => {},
    onHandleClearInput: () => {},
    onHandleInitializeDashboard: () => {},
    onHandleInput: () => {},
});

export default ContextDashboardFilter;
