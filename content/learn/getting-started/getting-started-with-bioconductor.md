---
title: "Getting Started with R / Bioconductor"
author: "Bioconductor"
description: "Guides helping R / Bioconductor users start RStudio or Jupyter for interactive analysis, and workflows for large-scale data processing."
---

<!-- 
The plan is for the lead sentence of each bullet to lead to a short video describing the topic.
-->

# Getting Started with R / Bioconductor

<hero small>This guide helps R / Bioconductor users: establish and familiarize themselves with essential Terra account and workspace concepts; use RStudio and Jupyter Notebooks for interactive analysis; execute workflows for large-scale, including use of R / Bioconductor in the workflow, and management of workflows from within R. The guide indicates how to discover R / Bioconductor workspaces, and how the R / Bioconductor community can contribute to AnVIL and cloud-based computation.</hero>

## AnVIL Basics

- [Getting Started with AnVIL][] provides essential information for setting up a Terra account, billing and cost management, use of Terra workspaces, finding and accessing (public as well as protected) consortium-scale data, and running workflows and interactive analyses.

## R / Bioconductor with RStudio or Jupyter

QUICK-START

1. After signing in following [Getting Started with AnVIL][] instructions, at the top right of the screen click on "Cloud Environment" and click "Customize".
2. Under "Application Configuration" choose a community-maintained RStudio environment, "RStudio". Choose the number of CPUs and persistent disk size appropriate to your needs. CPUs can be changed at any time, and disk size can be increased but not decreased. If you're unable to do this, it's because you aren't connected to a billing account or workspace that covers compute costs. Click "Create". 
3. You should then see an R icon in the top-right hand corner, which starts RStudio in your browser. You won't have to repeat step 2 next time unless you want to change your compute resources. Terra will pause the computing environment automatically after a period of inactivity to avoid unnecessary costs. Your work will remain saved on your persistent disk when the computing environment is suspended.

More on getting started

- [The RStudio runtime][RStudio] provides a familiar cloud-based environment for using R / Bioconductor.
- Access R / Bioconductor through Jupyter notebooks running an R 'kernel'.

[RStudio]: https://terra.bio/try-rstudio-in-terra/ 

Terra / AnVIL concepts for R / Bioconductor users

- Where Is My Computer? The AnVIL runtime provides the physical machinery for computation (e.g., a 4 core CPU with 16 GB of memory) as well as the local 'disk' storage. Unlike a traditional computer, the compute and storage components are separate from one another. For instance, storage created with one runtime can be used with another runtime. A runtime and persistent disk belong to a single user. They are associated with a billing project. The same runtime / persistent disk can be used across workspaces.

- Where Is My Data? Local disks, DATA, and workspace buckets. A persistent disk contains data, scripts, packages, and output created by the user in the course of an analysis. Workspaces bring additional data. Tabular summaries of workspace data, e.g., descriptions of participants in the study the workspace encapsulates, are presented under the DATA element, while larger data produced during an analysis may be associated with the workspace 'bucket'. The [AnVIL][AnVIL-package] R / Bioconductor package provides a familiar interface for accessing these resources.

- Sharing and Cloning; Billing and Cost Control. R / Bioconductor users are particularly  interested in reproducibility and sharing, and of course do not want to find themselves stuck with a surprising bill for their computing. ... The [AnVILPublish][] R / Bioconductor package provides a way to easily transform an R package or collection of Rmd files into an AnVIL workspace. Coupled with use of git or other version control system, this provides a good path to collaborative, reproducible, and sharable analysis.

## Workflows

- Workflow Inputs, Execution, and Outputs. ... The [AnVIL][AnVIL-package] also provides commands that make working with workflows, especially workflow inputs and outputs, easy for R / Bioconductor users.

- A Bulk RNASeq Differential Expression Workflow.

## R / Bioconductor Resources

- Public Workspaces.

- Participate in the R / Bioconductor Community.

- Producing customized runtimes.

[Getting Started with AnVIL]: https://anvilproject.org/learn#getting-started-with-anvil
[AnVIL-package]: https://bioconductor.org/packages/AnVIL
[AnVILPublish]: https://bioconductor.org/packages/AnVILPublish
