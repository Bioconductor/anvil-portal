/*
 * The AnVIL
 * https://www.anvilproject.org
 *
 * The AnVIL - NCPI data dashboard component.
 * Use of this component within markdown is possible.
 * Use the tag <data-dashboard-ncpi></data-dashboard-ncpi>.
 */

// Core dependencies
import React from "react";

// App dependencies
import DataDashboard from "./data-dashboard";
import DataSearch from "./data-search/data-search";
import DataTableEntities from "./data-table-entities/data-table-entities";
import DataTableSummary from "./data-table-summary/data-table-summary";
import {DashboardNCPIStaticQuery} from "../../hooks/dashboard-ncpi-query";

// Template variables
const countLabel = "Studies";
const dashboardIndexFileName = "/dashboard-index-ncpi.json";
const lunrIndexRefField = "dbGapIdAccession";
const searchFacets = ["platform", "dataTypes", "consentShortNames"]; // NCPI facets (selected from NCPI study property values) for the dashboard checkboxes.
const summaryKey = "platform";
const tableHeadersEntities = ["platform", "gapId", "studyName", "diseases", "dataTypes", "consentCodes", "subjectsTotal"];
const tableHeadersSummary = ["platform", "studies", "subjectsTotal"];

function DataDashboardNCPI() {

    const dashboardEntities = DashboardNCPIStaticQuery();

    return (
        <DataDashboard countLabel={countLabel}
                       dashboardEntities={dashboardEntities}
                       dashboardIndexFileName={dashboardIndexFileName}
                       resultKey={lunrIndexRefField}
                       searchFacets={searchFacets}
                       summaryKey={summaryKey}
                       tableHeadersEntities={tableHeadersEntities}
                       tableHeadersSummary={tableHeadersSummary}>
            <DataSearch/>
            <DataTableSummary/>
            <DataTableEntities ncpi/>
        </DataDashboard>
    )
}

export default DataDashboardNCPI;
