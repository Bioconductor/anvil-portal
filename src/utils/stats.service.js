/*
 * The AnVIL
 * https://www.anvilproject.org
 *
 * Service for formatting stats into FE model.
 */

/**
 * Parse the stats JSON and build up FE-compatible model of stats, to be displayed on home page.
 */
export function getStats() {

    const data = json;
    return {
        projects: countProjects(data),
        samples: sumSamples(data),
        size: calculateSize(data),
        sources: countSources(data),
        subjects: sumSubjects(data)
    };
}

/**
 * Returns the total size.
 */
function calculateSize(data) {

    return data.projects.reduce((accum, project) => {

        accum += project.size;
        return accum;
    }, 0);
}

/**
 * Returns the total number of projects.
 */
function countProjects(data) {

    return data.projects.length;
}

/**
 * Counts the total number of sources - sum unique project.source
 */
function countSources(data) {

    const sources = data.projects.map(project => project.source);
    return new Set(sources).size;
}

/**
 * Filter the project nodes by the specified type.
 */
function filterProjectNodesByType(project, type) {

    return project.nodes.filter(node => node.type === type) || [];
}

/**
 * Sum the specified node counts.
 */
function sumNodeValues(nodes) {

    return nodes.reduce((accum,  node) => {
        accum += node.count;
        return accum;
    }, 0);
}

/**
 * Sum the node value for the specified type, across all projects.
 */
function sumProjectNodeValues(data, nodeType) {

    return data.projects.reduce((projectAccum, project) => {

        projectAccum += sumNodeValues(filterProjectNodesByType(project, nodeType));
        return projectAccum;
    }, 0);
}

/**
 * Counts the total number of samples.
 */
function sumSamples(data) {

    return sumProjectNodeValues(data, "Sample");
}

/**
 * Counts the total number of subjects.
 */
function sumSubjects(data) {

    return sumProjectNodeValues(data, "Subject");
}

const json = {
    "projects": [
        {
            "files": [{ "type": "Cram", "size": 9857215672854, "count": 647 }], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 647 },
                { "type": "Sample", "count": 647 }, { "type": "Demographic", "count": 647 },
                { "type": "Family", "count": 1 }
            ], "size": 9857215672854, "public": false, "project_id": "AnVIL_CCDG_WashU_CVD_EOCAD_BioMe_WGS",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 984225575, "count": 773 },
                { "type": "Cram", "size": 14480453123113, "count": 773 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 773 },
                { "type": "Sample", "count": 773 }, { "type": "Demographic", "count": 773 }
            ], "size": 14481437348688, "public": false, "project_id": "AnVIL_CCDG_Broad_CVD_EOCAD_TaiChi_WGS",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 189222326, "count": 177 },
                { "type": "Cram", "size": 2282755143220, "count": 177 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 177 },
                { "type": "Sample", "count": 177 }, { "type": "Demographic", "count": 177 }
            ], "size": 2282944365546, "public": false, "project_id": "AnVIL_CCDG_Broad_AI_IBD_Brant_DS-IBD_WGS",
            "source": "CCDG"
        }, {
            "files": [{ "type": "Cram", "size": 53458835181740, "count": 3166 }], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 3166 },
                { "type": "Sample", "count": 3166 }, { "type": "Demographic", "count": 3166 }
            ], "size": 53458835181740, "public": false, "project_id": "AnVIL_CCDG_WashU_AI_T1D_T1DGC_WGS",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 110192991, "count": 703 },
                { "type": "Cram", "size": 1189179508428, "count": 703 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 703 },
                { "type": "Sample", "count": 703 }, { "type": "Demographic", "count": 703 }
            ], "size": 1189289701419, "public": false,
            "project_id": "AnVIL_CCDG_Broad_NP_Epilepsy_FINKPH_EPIL_CO_MORBIDI_MDS_WES", "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 617124035, "count": 418 },
                { "type": "Cram", "size": 8557491255341, "count": 418 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 418 },
                { "type": "Sample", "count": 418 }, { "type": "Demographic", "count": 418 }
            ], "size": 8558108379376, "public": false, "project_id": "AnVIL_CCDG_Broad_CVD_AFib_Penn_WGS",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 62519798, "count": 380 },
                { "type": "Cram", "size": 626775742535, "count": 380 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 380 },
                { "type": "Sample", "count": 380 }, { "type": "Demographic", "count": 380 }
            ], "size": 626838262333, "public": false, "project_id": "AnVIL_CCDG_Broad_NP_Epilepsy_BELULB_DS-EP-NPU_WES",
            "source": "CCDG"
        }, {
            "files": [{ "type": "Cram", "size": 39810492261549, "count": 2790 }], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 2790 },
                { "type": "Sample", "count": 2790 }, { "type": "Demographic", "count": 2790 }
            ], "size": 39810492261549, "public": false,
            "project_id": "AnVIL_CCDG_WashU_CVD_EOCAD_Harvard-Costa-Rica_WGS", "source": "CCDG"
        }, {
            "files": [{ "type": "Cram", "size": 2842579686431, "count": 146 }], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 146 },
                { "type": "Sample", "count": 146 }, { "type": "Demographic", "count": 146 }
            ], "size": 2842579686431, "public": false, "project_id": "AnVIL_CCDG_WashU_CVD_EOCAD_WashU-CAD_GRU-IRB_WGS",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 2715555344, "count": 2159 },
                { "type": "Cram", "size": 37670956510418, "count": 2159 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 2158 },
                { "type": "Sample", "count": 2158 }, { "type": "Demographic", "count": 2158 }
            ], "size": 37673672065762, "public": false, "project_id": "AnVIL_CCDG_Broad_CVD_EOCAD_VIRGO_WGS",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 365449347, "count": 248 },
                { "type": "Cram", "size": 4927806397669, "count": 248 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 248 },
                { "type": "Sample", "count": 248 }, { "type": "Demographic", "count": 248 }
            ], "size": 4928171847016, "public": false, "project_id": "AnVIL_CCDG_Broad_CVD_AFib_AFLMU_WGS",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 134757497, "count": 90 },
                { "type": "Cram", "size": 1874822058445, "count": 90 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 90 },
                { "type": "Sample", "count": 90 }, { "type": "Demographic", "count": 90 }
            ], "size": 1874956815942, "public": false, "project_id": "AnVIL_CCDG_Broad_CVD_AFib_GENAF_WGS",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 18439179, "count": 112 },
                { "type": "Cram", "size": 193231581956, "count": 112 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 112 },
                { "type": "Sample", "count": 112 }, { "type": "Demographic", "count": 112 }
            ], "size": 193250021135, "public": false, "project_id": "AnVIL_CCDG_Broad_NP_Epilepsy_DEUUPM_HMB_MDS_WES",
            "source": "CCDG"
        }, {
            "files": [{ "type": "Cram", "size": 64704073442427, "count": 3121 }], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 3121 },
                { "type": "Sample", "count": 3121 }, { "type": "Demographic", "count": 3121 }
            ], "size": 64704073442427, "public": false, "project_id": "AnVIL_CCDG_WashU_CVD_EOCAD_METSIM_WGS",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 407866168, "count": 290 },
                { "type": "Cram", "size": 5449341939322, "count": 290 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 290 },
                { "type": "Sample", "count": 290 }, { "type": "Demographic", "count": 290 }
            ], "size": 5449749805490, "public": false, "project_id": "AnVIL_CCDG_Broad_CVD_AFib_JHU_WGS",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 181343860, "count": 118 },
                { "type": "Cram", "size": 2544919524041, "count": 118 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 118 },
                { "type": "Sample", "count": 118 }, { "type": "Demographic", "count": 118 }
            ], "size": 2545100867901, "public": false, "project_id": "AnVIL_CCDG_Broad_CVD_AFib_MPP_WGS",
            "source": "CCDG"
        }, {
            "files": [{ "type": "Cram", "size": 3089850438783, "count": 155 }], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 155 },
                { "type": "Sample", "count": 155 }, { "type": "Demographic", "count": 155 }
            ], "size": 3089850438783, "public": false, "project_id": "AnVIL_CCDG_WashU_CVD_EOCAD_Finland-CHD_WGS",
            "source": "CCDG"
        }, {
            "files": [{ "type": "Cram", "size": 24488970950003, "count": 1049 }], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 1049 },
                { "type": "Sample", "count": 1049 }, { "type": "Demographic", "count": 1049 },
                { "type": "Family", "count": 325 }
            ], "size": 24488970950003, "public": false, "project_id": "AnVIL_CCDG_NYGC_NP_Alz_LOAD_WGS",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 16523611, "count": 105 },
                { "type": "Cram", "size": 170530307416, "count": 105 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 105 },
                { "type": "Sample", "count": 105 }, { "type": "Demographic", "count": 105 }
            ], "size": 170546831027, "public": false,
            "project_id": "AnVIL_CCDG_Broad_NP_Epilepsy_GBRSWU_CARDI_NEURO_WES", "source": "CCDG"
        }, {
            "files": [{ "type": "Cram", "size": 0, "count": 9205 }], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 9205 },
                { "type": "Sample", "count": 9205 }, { "type": "Demographic", "count": 9205 },
                { "type": "Family", "count": 2423 }
            ], "size": 0, "public": false, "project_id": "AnVIL_CCDG_NYGC_NP_Autism_SSC_WGS", "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 1115942, "count": 7 }, { "type": "Cram", "size": 10032611520, "count": 7 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 7 }, { "type": "Sample", "count": 7 },
                { "type": "Demographic", "count": 7 }
            ], "size": 10033727462, "public": false,
            "project_id": "AnVIL_CCDG_Broad_NP_Epilepsy_CHEUBB_HMB_IRB_MDS_WES", "source": "CCDG"
        }, {
            "files": [{ "type": "Cram", "size": 27004223148660, "count": 1356 }], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 1356 },
                { "type": "Sample", "count": 1356 }, { "type": "Demographic", "count": 1356 }
            ], "size": 27004223148660, "public": false, "project_id": "AnVIL_CCDG_WashU_CVD_EOCAD_Penn_WGS",
            "source": "CCDG"
        }, {
            "files": [{ "type": "Cram", "size": 1559310843739, "count": 66 }], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 66 },
                { "type": "Sample", "count": 66 }, { "type": "Demographic", "count": 66 },
                { "type": "Family", "count": 17 }
            ], "size": 1559310843739, "public": false, "project_id": "AnVIL_CCDG_NYGC_NP_Autism_ACE2_DS-MDS_WGS",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 149959184, "count": 105 },
                { "type": "Cram", "size": 2316361485193, "count": 105 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 105 },
                { "type": "Sample", "count": 105 }, { "type": "Demographic", "count": 105 }
            ], "size": 2316511444377, "public": false, "project_id": "AnVIL_CCDG_Broad_CVD_AFib_MGH_WGS",
            "source": "CCDG"
        }, {
            "files": [{ "type": "Cram", "size": 28147877917399, "count": 1171 }], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 1171 },
                { "type": "Sample", "count": 1171 }, { "type": "Demographic", "count": 1171 }
            ], "size": 28147877917399, "public": false, "project_id": "AnVIL_CCDG_NYGC_AI_Asthma_Gala2_WGS",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 1684917598, "count": 1565 },
                { "type": "Cram", "size": 21607801141256, "count": 1565 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 1565 },
                { "type": "Sample", "count": 1565 }, { "type": "Demographic", "count": 1565 }
            ], "size": 21609486058854, "public": false, "project_id": "AnVIL_CCDG_Broad_AI_IBD_McGovern_WGS",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 134058715, "count": 777 },
                { "type": "Cram", "size": 1376432922467, "count": 777 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 777 },
                { "type": "Sample", "count": 777 }, { "type": "Demographic", "count": 777 }
            ], "size": 1376566981182, "public": false, "project_id": "AnVIL_CCDG_Broad_NP_Epilepsy_IRLRCI_GRU_IRB_WES",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 12577899, "count": 74 }, { "type": "Cram", "size": 121154570594, "count": 74 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 74 },
                { "type": "Sample", "count": 74 }, { "type": "Demographic", "count": 74 }
            ], "size": 121167148493, "public": false, "project_id": "AnVIL_CCDG_Broad_NP_Epilepsy_DEUULG_GRU_WES",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 44196269, "count": 266 },
                { "type": "Cram", "size": 439309878336, "count": 266 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 266 },
                { "type": "Sample", "count": 266 }, { "type": "Demographic", "count": 266 }
            ], "size": 439354074605, "public": false,
            "project_id": "AnVIL_CCDG_Broad_NP_Epilepsy_AUSRMB_DS-EAED-MDS_WES", "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 272122285, "count": 253 },
                { "type": "Cram", "size": 4076858655093, "count": 253 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 253 },
                { "type": "Sample", "count": 253 }, { "type": "Demographic", "count": 253 }
            ], "size": 4077130777378, "public": false, "project_id": "AnVIL_CCDG_Broad_AI_IBD_Cho_WGS", "source": "CCDG"
        }, {
            "files": [{ "type": "Cram", "size": 13906553077363, "count": 580 }], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 580 },
                { "type": "Sample", "count": 580 }, { "type": "Demographic", "count": 580 },
                { "type": "Family", "count": 181 }
            ], "size": 13906553077363, "public": false, "project_id": "AnVIL_CCDG_NYGC_NP_Autism_SAGE_WGS",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 25827895, "count": 25 }, { "type": "Cram", "size": 294090297613, "count": 25 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 25 },
                { "type": "Sample", "count": 25 }, { "type": "Demographic", "count": 25 }
            ], "size": 294116125508, "public": false, "project_id": "AnVIL_CCDG_Broad_AI_IBD_Newberry_WGS",
            "source": "CCDG"
        }, {
            "files": [{ "type": "Cram", "size": 27441909659636, "count": 1358 }], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 1358 },
                { "type": "Sample", "count": 1358 }, { "type": "Demographic", "count": 1358 }
            ], "size": 27441909659636, "public": false, "project_id": "AnVIL_CCDG_Baylor_CVD_HemStroke_ERICH_WGS",
            "source": "CCDG"
        }, {
            "files": [{ "type": "Cram", "size": 27934226194914, "count": 1177 }], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 1177 },
                { "type": "Sample", "count": 1177 }, { "type": "Demographic", "count": 1177 },
                { "type": "Family", "count": 306 }
            ], "size": 27934226194914, "public": false, "project_id": "AnVIL_CCDG_NYGC_NP_Alz_EFIGA_WGS",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 102603469, "count": 606 },
                { "type": "Cram", "size": 1071785066833, "count": 606 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 606 },
                { "type": "Sample", "count": 606 }, { "type": "Demographic", "count": 606 }
            ], "size": 1071887670302, "public": false, "project_id": "AnVIL_CCDG_Broad_NP_Epilepsy_ITAIGI_GRU_WES",
            "source": "CCDG"
        }, {
            "files": [{ "type": "Cram", "size": 102658325654759, "count": 3944 }], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 3944 },
                { "type": "Sample", "count": 3944 }, { "type": "Demographic", "count": 3944 }
            ], "size": 102658325654759, "public": false, "project_id": "AnVIL_CCDG_Baylor_CVD_EOCAD_SoL_WGS",
            "source": "CCDG"
        }, {
            "files": [{ "type": "Cram", "size": 26785431275347, "count": 1122 }], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 1122 },
                { "type": "Sample", "count": 1122 }, { "type": "Demographic", "count": 1122 }
            ], "size": 26785431275347, "public": false, "project_id": "AnVIL_CCDG_Baylor_CVD_AFib_BioVU_WGS",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 15330858, "count": 92 }, { "type": "Cram", "size": 160010338430, "count": 92 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 92 },
                { "type": "Sample", "count": 92 }, { "type": "Demographic", "count": 92 }
            ], "size": 160025669288, "public": false,
            "project_id": "AnVIL_CCDG_Broad_NP_Epilepsy_FINUVH_HMB_NPU_MDS_WES", "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 2736835, "count": 16 }, { "type": "Cram", "size": 27194500669, "count": 16 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 16 },
                { "type": "Sample", "count": 16 }, { "type": "Demographic", "count": 16 }
            ], "size": 27197237504, "public": false, "project_id": "AnVIL_CCDG_Broad_NP_Epilepsy_CZEMTH_GRU_WES",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 18076428, "count": 94 }, { "type": "Cram", "size": 187691484489, "count": 94 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 94 },
                { "type": "Sample", "count": 94 }, { "type": "Demographic", "count": 94 }
            ], "size": 187709560917, "public": false, "project_id": "AnVIL_CCDG_Broad_NP_Epilepsy_CANUTN_DS-EP_WES",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 738613013, "count": 534 },
                { "type": "Cram", "size": 8502816423873, "count": 534 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 534 },
                { "type": "Sample", "count": 534 }, { "type": "Demographic", "count": 534 }
            ], "size": 8503555036886, "public": false, "project_id": "AnVIL_CCDG_Broad_NP_Autism_State-Sanders_WGS",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 27208524, "count": 146 },
                { "type": "Cram", "size": 293942816461, "count": 146 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 146 },
                { "type": "Sample", "count": 146 }, { "type": "Demographic", "count": 146 }
            ], "size": 293970024985, "public": false, "project_id": "AnVIL_CCDG_Broad_NP_Epilepsy_DEUUKL_HMB_WES",
            "source": "CCDG"
        }, {
            "files": [{ "type": "Cram", "size": 11946516978946, "count": 624 }], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 624 },
                { "type": "Sample", "count": 624 }, { "type": "Demographic", "count": 624 }
            ], "size": 11946516978946, "public": false, "project_id": "AnVIL_CCDG_WashU_CVD_EOCAD_BioVu_WGS",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 159377804, "count": 958 },
                { "type": "Cram", "size": 1611372006520, "count": 958 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 958 },
                { "type": "Sample", "count": 958 }, { "type": "Demographic", "count": 958 }
            ], "size": 1611531384324, "public": false,
            "project_id": "AnVIL_CCDG_Broad_NP_Epilepsy_DEUUKB_HMB_NPU_MDS_WES", "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 20107092, "count": 116 },
                { "type": "Cram", "size": 210179297085, "count": 116 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 116 },
                { "type": "Sample", "count": 116 }, { "type": "Demographic", "count": 116 }
            ], "size": 210199404177, "public": false,
            "project_id": "AnVIL_CCDG_Broad_NP_Epilepsy_CYPCYP_HMB_NPU_MDS_WES", "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 697859601, "count": 464 },
                { "type": "Cram", "size": 9064652372501, "count": 464 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 464 },
                { "type": "Sample", "count": 464 }, { "type": "Demographic", "count": 464 }
            ], "size": 9065350232102, "public": false, "project_id": "AnVIL_CCDG_Broad_CVD_AFib_Intermountain_WGS",
            "source": "CCDG"
        }, {
            "files": [{ "type": "Cram", "size": 22816547738971, "count": 905 }], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 905 },
                { "type": "Sample", "count": 905 }, { "type": "Demographic", "count": 905 },
                { "type": "Family", "count": 305 }
            ], "size": 22816547738971, "public": false, "project_id": "AnVIL_CCDG_NYGC_NP_Autism_TASC_WGS",
            "source": "CCDG"
        }, {
            "files": [{ "type": "Cram", "size": 8774689953568, "count": 429 }], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 429 },
                { "type": "Sample", "count": 429 }, { "type": "Demographic", "count": 429 }
            ], "size": 8774689953568, "public": false, "project_id": "AnVIL_CCDG_WashU_CVD_EOCAD_Emory_WGS",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 176097183, "count": 112 },
                { "type": "Cram", "size": 2405125644705, "count": 112 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 112 },
                { "type": "Sample", "count": 112 }, { "type": "Demographic", "count": 112 }
            ], "size": 2405301741888, "public": false, "project_id": "AnVIL_CCDG_Broad_CVD_AFib_UCSF_WGS",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 813877581, "count": 856 },
                { "type": "Cram", "size": 9932235437579, "count": 856 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 856 },
                { "type": "Sample", "count": 856 }, { "type": "Demographic", "count": 856 }
            ], "size": 9933049315160, "public": false, "project_id": "AnVIL_CCDG_Broad_AI_IBD_McCauley_WGS",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 954570558, "count": 914 },
                { "type": "Cram", "size": 11761560352638, "count": 914 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 914 },
                { "type": "Sample", "count": 914 }, { "type": "Demographic", "count": 914 }
            ], "size": 11762514923196, "public": false, "project_id": "AnVIL_CCDG_Broad_AI_IBD_Kugathasan_WGS",
            "source": "CCDG"
        }, {
            "files": [{ "type": "Cram", "size": 10407114418895, "count": 429 }], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 429 },
                { "type": "Sample", "count": 429 }, { "type": "Diagnosis", "count": 4 },
                { "type": "Demographic", "count": 429 }, { "type": "Family", "count": 121 }
            ], "size": 10407114418895, "public": false, "project_id": "AnVIL_CCDG_NYGC_NP_Autism_ACE2_GRU-MDS_WGS",
            "source": "CCDG"
        }, {
            "files": [{ "type": "Cram", "size": 26229218761237, "count": 1201 }], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 1201 },
                { "type": "Sample", "count": 1201 }, { "type": "Demographic", "count": 1201 }
            ], "size": 26229218761237, "public": false, "project_id": "AnVIL_CCDG_Baylor_CVD_EOCAD_BioMe_WGS",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 2291533, "count": 14 }, { "type": "Cram", "size": 23405636930, "count": 14 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 14 },
                { "type": "Sample", "count": 14 }, { "type": "Demographic", "count": 14 }
            ], "size": 23407928463, "public": false, "project_id": "AnVIL_CCDG_Broad_NP_Epilepsy_HRVUZG_HMB_MDS_WES",
            "source": "CCDG"
        }, {
            "files": [{ "type": "Cram", "size": 3648823861593, "count": 148 }], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 148 },
                { "type": "Sample", "count": 148 }, { "type": "Demographic", "count": 148 },
                { "type": "Family", "count": 148 }
            ], "size": 3648823861593, "public": false, "project_id": "AnVIL_CCDG_NYGC_NP_Alz_WHICAP_WGS",
            "source": "CCDG"
        }, {
            "files": [{ "type": "Cram", "size": 0, "count": 112 }], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 112 },
                { "type": "Sample", "count": 112 }, { "type": "Demographic", "count": 112 }
            ], "size": 0, "public": false, "project_id": "AnVIL_CCDG_WashU_CVD-NP-AI_Controls_VCControls_WGS",
            "source": "CCDG"
        }, {
            "files": [{ "type": "Cram", "size": 17218986302449, "count": 724 }], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 724 },
                { "type": "Sample", "count": 724 }, { "type": "Demographic", "count": 724 },
                { "type": "Family", "count": 176 }
            ], "size": 17218986302449, "public": false, "project_id": "AnVIL_CCDG_NYGC_NP_Autism_HMCA_WGS",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 1117944836, "count": 1136 },
                { "type": "Cram", "size": 15574596484122, "count": 1136 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 1136 },
                { "type": "Sample", "count": 1136 }, { "type": "Demographic", "count": 1136 }
            ], "size": 15575714428958, "public": false, "project_id": "AnVIL_CCDG_Broad_CVD_EOCAD_PROMIS_WGS",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 2833632, "count": 2 }, { "type": "Cram", "size": 39805369261, "count": 2 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 2 }, { "type": "Sample", "count": 2 },
                { "type": "Demographic", "count": 2 }
            ], "size": 39808202893, "public": false, "project_id": "AnVIL_CCDG_Broad_CVD_AFib_Vanderbilt-Ablation_WGS",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 989648946, "count": 904 },
                { "type": "Cram", "size": 11940667270045, "count": 904 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 904 },
                { "type": "Sample", "count": 904 }, { "type": "Demographic", "count": 904 }
            ], "size": 11941656918991, "public": false, "project_id": "AnVIL_CCDG_Broad_AI_IBD_Brant_HMB_WGS",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 514434839, "count": 496 },
                { "type": "Cram", "size": 6171765015395, "count": 496 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 496 },
                { "type": "Sample", "count": 496 }, { "type": "Demographic", "count": 496 }
            ], "size": 6172279450234, "public": false, "project_id": "AnVIL_CCDG_Broad_CVD_Stroke_BRAVE_WGS",
            "source": "CCDG"
        }, {
            "files": [{ "type": "Cram", "size": 5524496789184, "count": 277 }], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 277 },
                { "type": "Sample", "count": 277 }, { "type": "Demographic", "count": 277 }
            ], "size": 5524496789184, "public": false, "project_id": "AnVIL_CCDG_WashU_CVD_EOCAD_Emerge_WGS",
            "source": "CCDG"
        }, {
            "files": [{ "type": "Cram", "size": 21826279922411, "count": 1051 }], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 1051 },
                { "type": "Sample", "count": 1051 }, { "type": "Demographic", "count": 1051 }
            ], "size": 21826279922411, "public": false, "project_id": "AnVIL_CCDG_WashU_CVD_EOCAD_Duke_WGS",
            "source": "CCDG"
        }, {
            "files": [{ "type": "Cram", "size": 6893801040512, "count": 348 }], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 348 },
                { "type": "Sample", "count": 348 }, { "type": "Demographic", "count": 348 }
            ], "size": 6893801040512, "public": false, "project_id": "AnVIL_CCDG_WashU_CVD_EOCAD_Cleveland_WGS",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 187184105, "count": 123 },
                { "type": "Cram", "size": 2557975477061, "count": 123 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 123 },
                { "type": "Sample", "count": 123 }, { "type": "Demographic", "count": 123 }
            ], "size": 2558162661166, "public": false, "project_id": "AnVIL_CCDG_Broad_CVD_AFib_Duke_WGS",
            "source": "CCDG"
        }, {
            "files": [{ "type": "Cram", "size": 106069350754563, "count": 4601 }], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 4601 },
                { "type": "Sample", "count": 4601 }, { "type": "Demographic", "count": 4601 },
                { "type": "Family", "count": 995 }
            ], "size": 106069350754563, "public": false, "project_id": "AnVIL_CCDG_NYGC_NP_Autism_AGRE_WGS",
            "source": "CCDG"
        }, {
            "files": [{ "type": "Cram", "size": 13924063945161, "count": 639 }], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 639 },
                { "type": "Sample", "count": 639 }, { "type": "Demographic", "count": 639 }
            ], "size": 13924063945161, "public": false, "project_id": "AnVIL_CCDG_Baylor_CVD_AFib_Groningen_WGS",
            "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 39996469, "count": 244 },
                { "type": "Cram", "size": 403810506938, "count": 244 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 244 },
                { "type": "Sample", "count": 244 }, { "type": "Demographic", "count": 244 }
            ], "size": 403850503407, "public": false,
            "project_id": "AnVIL_CCDG_Broad_NP_Epilepsy_ITAICB_HMB_NPU_MDS_WES", "source": "CCDG"
        }, {
            "files": [
                { "type": "Crai", "size": 9569415, "count": 6 }, { "type": "Cram", "size": 118554407817, "count": 6 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 6 }, { "type": "Sample", "count": 6 },
                { "type": "Diagnosis", "count": 6 }, { "type": "Demographic", "count": 6 }
            ], "size": 118563977232, "public": false, "project_id": "AnVIL_CMG_Broad_Muscle_KNC_WGS", "source": "CMG"
        }, {
            "files": [
                { "type": "Crai", "size": 50365489, "count": 283 },
                { "type": "Cram", "size": 522321917208, "count": 283 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 283 },
                { "type": "Sample", "count": 283 }, { "type": "Diagnosis", "count": 283 },
                { "type": "Demographic", "count": 283 }
            ], "size": 522372282697, "public": false, "project_id": "AnVIL_CMG_Broad_Orphan_VCGS-White_WES",
            "source": "CMG"
        }, {
            "files": [
                { "type": "Crai", "size": 252323449, "count": 1280 },
                { "type": "Cram", "size": 2302789160222, "count": 1280 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 1276 },
                { "type": "Sample", "count": 1276 }, { "type": "Demographic", "count": 1276 },
                { "type": "Diagnosis", "count": 222 }
            ], "size": 2303041483671, "public": false, "project_id": "AnVIL_CMG_Broad_Muscle_Myoseq_WES",
            "source": "CMG"
        }, {
            "files": [
                { "type": "Crai", "size": 1604113, "count": 10 }, { "type": "Cram", "size": 18167853977, "count": 10 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 10 },
                { "type": "Sample", "count": 10 }, { "type": "Diagnosis", "count": 10 },
                { "type": "Demographic", "count": 10 }
            ], "size": 18169458090, "public": false, "project_id": "AnVIL_CMG_Broad_Heart_Ware_WES", "source": "CMG"
        }, {
            "files": [
                { "type": "Crai", "size": 19128007, "count": 109 },
                { "type": "Cram", "size": 193902773220, "count": 109 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 109 },
                { "type": "Sample", "count": 109 }, { "type": "Diagnosis", "count": 109 },
                { "type": "Demographic", "count": 109 }
            ], "size": 193921901227, "public": false, "project_id": "AnVIL_CMG_Broad_Muscle_Beggs_WES", "source": "CMG"
        }, {
            "files": [
                { "type": "Crai", "size": 5913845, "count": 31 }, { "type": "Cram", "size": 76145872650, "count": 31 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 31 },
                { "type": "Sample", "count": 31 }, { "type": "Diagnosis", "count": 31 },
                { "type": "Demographic", "count": 31 }
            ], "size": 76151786495, "public": false, "project_id": "AnVIL_CMG_Broad_Orphan_Estonia-Ounap_WES",
            "source": "CMG"
        }, {
            "files": [
                { "type": "Crai", "size": 113642218, "count": 517 },
                { "type": "Cram", "size": 1374566997019, "count": 517 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 517 },
                { "type": "Sample", "count": 517 }, { "type": "Diagnosis", "count": 516 },
                { "type": "Demographic", "count": 517 }
            ], "size": 1374680639237, "public": false, "project_id": "AnVIL_CMG_Broad_Eye_Pierce_WES", "source": "CMG"
        }, {
            "files": [
                { "type": "Crai", "size": 141951544, "count": 104 },
                { "type": "Cram", "size": 1838858308480, "count": 104 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 104 },
                { "type": "Sample", "count": 104 }, { "type": "Diagnosis", "count": 104 },
                { "type": "Demographic", "count": 104 }
            ], "size": 1839000260024, "public": false, "project_id": "AnVIL_CMG_Broad_Orphan_Estonia-Ounap_WGS",
            "source": "CMG"
        }, {
            "files": [
                { "type": "Crai", "size": 106904713, "count": 669 },
                { "type": "Cram", "size": 1105326934721, "count": 669 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 665 },
                { "type": "Sample", "count": 665 }, { "type": "Diagnosis", "count": 169 },
                { "type": "Demographic", "count": 665 }
            ], "size": 1105433839434, "public": false, "project_id": "AnVIL_CMG_Broad_Muscle_Topf_WES", "source": "CMG"
        }, {
            "files": [
                { "type": "Crai", "size": 48816358, "count": 277 },
                { "type": "Cram", "size": 520543556049, "count": 277 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 277 },
                { "type": "Sample", "count": 277 }, { "type": "Diagnosis", "count": 277 },
                { "type": "Demographic", "count": 277 }
            ], "size": 520592372407, "public": false, "project_id": "AnVIL_CMG_Broad_Blood_Sankaran_WES",
            "source": "CMG"
        }, {
            "files": [
                { "type": "Crai", "size": 138426705, "count": 663 },
                { "type": "Cram", "size": 1438969355294, "count": 663 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 663 },
                { "type": "Sample", "count": 663 }, { "type": "Diagnosis", "count": 663 },
                { "type": "Demographic", "count": 663 }
            ], "size": 1439107781999, "public": false, "project_id": "AnVIL_CMG_Broad_Brain_Walsh_WES", "source": "CMG"
        }, {
            "files": [
                { "type": "Crai", "size": 3633312, "count": 22 }, { "type": "Cram", "size": 42251691643, "count": 22 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 22 },
                { "type": "Sample", "count": 22 }, { "type": "Diagnosis", "count": 21 },
                { "type": "Demographic", "count": 22 }
            ], "size": 42255324955, "public": false, "project_id": "AnVIL_CMG_Broad_Muscle_Kang_WES", "source": "CMG"
        }, {
            "files": [
                { "type": "Crai", "size": 142261282, "count": 769 },
                { "type": "Cram", "size": 1599735120737, "count": 769 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 769 },
                { "type": "Sample", "count": 769 }, { "type": "Demographic", "count": 769 },
                { "type": "Diagnosis", "count": 407 }
            ], "size": 1599877382019, "public": false, "project_id": "AnVIL_CMG_Broad_Kidney_Hildebrandt_WES",
            "source": "CMG"
        }, {
            "files": [
                { "type": "Crai", "size": 7128196, "count": 43 }, { "type": "Cram", "size": 70000790362, "count": 43 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 43 },
                { "type": "Sample", "count": 43 }, { "type": "Diagnosis", "count": 43 },
                { "type": "Demographic", "count": 43 }
            ], "size": 70007918558, "public": false, "project_id": "AnVIL_CMG_Broad_Muscle_OGrady_WES", "source": "CMG"
        }, {
            "files": [
                { "type": "Crai", "size": 252031350, "count": 1181 },
                { "type": "Cram", "size": 3062340483160, "count": 1181 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 1181 },
                { "type": "Sample", "count": 1181 }, { "type": "Diagnosis", "count": 1181 },
                { "type": "Demographic", "count": 1181 }
            ], "size": 3062592514510, "public": false, "project_id": "AnVIL_CMG_Broad_Brain_Gleeson_WES",
            "source": "CMG"
        }, {
            "files": [
                { "type": "Crai", "size": 37473140, "count": 25 }, { "type": "Cram", "size": 489166997499, "count": 25 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 25 },
                { "type": "Sample", "count": 25 }, { "type": "Diagnosis", "count": 25 },
                { "type": "Demographic", "count": 25 }
            ], "size": 489204470639, "public": false, "project_id": "AnVIL_CMG_Broad_Kidney_Hildebrandt_WGS",
            "source": "CMG"
        }, {
            "files": [
                { "type": "Crai", "size": 63665088, "count": 268 },
                { "type": "Cram", "size": 751439268567, "count": 268 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 268 },
                { "type": "Sample", "count": 267 }, { "type": "Diagnosis", "count": 264 },
                { "type": "Demographic", "count": 268 }
            ], "size": 751502933655, "public": false, "project_id": "AnVIL_CMG_Broad_Orphan_Manton_WES", "source": "CMG"
        }, {
            "files": [
                { "type": "Crai", "size": 59376660, "count": 45 }, { "type": "Cram", "size": 678173229450, "count": 45 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 45 },
                { "type": "Sample", "count": 45 }, { "type": "Diagnosis", "count": 45 },
                { "type": "Demographic", "count": 45 }
            ], "size": 678232606110, "public": false, "project_id": "AnVIL_CMG_Broad_Heart_PCGC-Tristani_WGS",
            "source": "CMG"
        }, {
            "files": [
                { "type": "Crai", "size": 10799863, "count": 44 }, { "type": "Cram", "size": 122511361522, "count": 44 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 44 },
                { "type": "Sample", "count": 44 }, { "type": "Diagnosis", "count": 35 },
                { "type": "Demographic", "count": 44 }
            ], "size": 122522161385, "public": false, "project_id": "AnVIL_CMG_Broad_Muscle_KNC_WES", "source": "CMG"
        }, {
            "files": [
                { "type": "Crai", "size": 21600721, "count": 129 },
                { "type": "Cram", "size": 221434970796, "count": 129 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 129 },
                { "type": "Sample", "count": 129 }, { "type": "Diagnosis", "count": 121 },
                { "type": "Demographic", "count": 129 }
            ], "size": 221456571517, "public": false, "project_id": "AnVIL_CMG_Broad_Heart_Seidman_WES", "source": "CMG"
        }, {
            "files": [
                { "type": "Crai", "size": 45081670, "count": 32 }, { "type": "Cram", "size": 561482781588, "count": 32 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 32 },
                { "type": "Sample", "count": 32 }, { "type": "Diagnosis", "count": 32 },
                { "type": "Demographic", "count": 32 }
            ], "size": 561527863258, "public": false, "project_id": "AnVIL_CMG_Broad_Muscle_Bonnemann_WGS",
            "source": "CMG"
        }, {
            "files": [
                { "type": "Crai", "size": 3766224, "count": 24 }, { "type": "Cram", "size": 42303785497, "count": 24 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 24 },
                { "type": "Sample", "count": 24 }, { "type": "Diagnosis", "count": 24 },
                { "type": "Demographic", "count": 24 }
            ], "size": 42307551721, "public": false, "project_id": "AnVIL_CMG_Broad_Muscle_Bonnemann_WES",
            "source": "CMG"
        }, {
            "files": [
                { "type": "Crai", "size": 9992703, "count": 7 }, { "type": "Cram", "size": 136563274738, "count": 7 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 7 }, { "type": "Sample", "count": 7 },
                { "type": "Diagnosis", "count": 7 }, { "type": "Demographic", "count": 7 }
            ], "size": 136573267441, "public": false, "project_id": "AnVIL_CMG_Broad_Orphan_Manton_WGS", "source": "CMG"
        }, {
            "files": [
                { "type": "Crai", "size": 5621326, "count": 35 }, { "type": "Cram", "size": 49837148216, "count": 35 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 35 },
                { "type": "Sample", "count": 35 }, { "type": "Diagnosis", "count": 35 },
                { "type": "Demographic", "count": 35 }
            ], "size": 49842769542, "public": false, "project_id": "AnVIL_CMG_Broad_Muscle_Ravenscroft_WES",
            "source": "CMG"
        }, {
            "files": [
                { "type": "Crai", "size": 40956731, "count": 30 }, { "type": "Cram", "size": 500435856484, "count": 30 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 30 },
                { "type": "Sample", "count": 30 }, { "type": "Diagnosis", "count": 30 },
                { "type": "Demographic", "count": 30 }
            ], "size": 500476813215, "public": false, "project_id": "AnVIL_CMG_Broad_Orphan_VCGS-White_WGS",
            "source": "CMG"
        }, {
            "files": [
                { "type": "Crai", "size": 5311271, "count": 3 }, { "type": "Cram", "size": 72463075452, "count": 3 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 3 }, { "type": "Sample", "count": 3 },
                { "type": "Diagnosis", "count": 3 }, { "type": "Demographic", "count": 3 }
            ], "size": 72468386723, "public": false, "project_id": "AnVIL_CMG_Broad_Muscle_Myoseq_WGS", "source": "CMG"
        }, {
            "files": [
                { "type": "Crai", "size": 2810357, "count": 2 }, { "type": "Cram", "size": 37495810868, "count": 2 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 2 }, { "type": "Sample", "count": 2 },
                { "type": "Diagnosis", "count": 2 }, { "type": "Demographic", "count": 2 }
            ], "size": 37498621225, "public": false, "project_id": "AnVIL_CMG_Broad_Muscle_Kang_WGS", "source": "CMG"
        }, {
            "files": [
                { "type": "Crai", "size": 50418441, "count": 35 }, { "type": "Cram", "size": 637353684386, "count": 35 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 35 },
                { "type": "Sample", "count": 35 }, { "type": "Diagnosis", "count": 35 },
                { "type": "Demographic", "count": 35 }
            ], "size": 637404102827, "public": false, "project_id": "AnVIL_CMG_Broad_Eye_Pierce_WGS", "source": "CMG"
        }, {
            "files": [], "nodes": [
                { "type": "Phenotype", "count": 2410 }, { "type": "Gene", "count": 340 },
                { "type": "Family", "count": 3542 }
            ], "size": 0, "public": false, "project_id": "cmg*", "source": "CMG"
        }, {
            "files": [
                { "type": "Fai", "size": 169122, "count": 2 }, { "type": "Txt", "size": 429736556, "count": 1678 },
                { "type": "Gtf", "size": 1279496575, "count": 2 }, { "type": "Dict", "size": 612548, "count": 2 },
                { "type": "Tbi", "size": 2481730, "count": 1 }, { "type": "Fasta", "size": 6380858386, "count": 2 },
                { "type": "Vcf", "size": 4002257466, "count": 1 },
                { "type": "Bam", "size": 114694508917881, "count": 18361 },
                { "type": "Bai", "size": 73727491040, "count": 18361 },
                { "type": "Cram", "size": 42844444725568, "count": 879 },
                { "type": "Crai", "size": 1440352481, "count": 879 },
                { "type": "Tsv", "size": 18765436524, "count": 1676 }
            ], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 979 },
                { "type": "Sample", "count": 17382 }, { "type": "Demographic", "count": 979 }
            ], "size": 157644982535877, "public": false, "project_id": "AnVIL_GTEx_V8_hg38", "source": "GTEx"
        }, {
            "files": [{ "type": "Cram", "size": 41289528702783, "count": 2504 }], "nodes": [
                { "type": "Project", "count": 1 }, { "type": "Subject", "count": 2504 },
                { "type": "Sample", "count": 2504 }, { "type": "Population", "count": 26 }
            ], "size": 41289528702783, "public": true, "project_id": "1000G-high-coverage-2019",
            "source": "ThousandGenomes"
        }
    ]
};
