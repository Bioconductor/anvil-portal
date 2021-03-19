---
author: "AnVIL"
carousel: true
date: "2021-03-10"
description: "The Broad Institute's Seqr is being launched today in production within AnVIL to provide a platform for genomic data analysis for rare diseases.
The availability of Seqr will enable researchers to analyze and annotate their data with seqr in the AnVIL platform as well as collaborate with other investigators as they choose."
docType: "News"
featured: true
logo: ../../../_images/anvil.png
title: "Announcing Seqr Availability in AnVIL"
---

# Announcing Seqr Availability in NHGRI's AnVIL
##### Posted: March 10, 2021

The Broad Institute's [Seqr](https://seqr.broadinstitute.org/) is being launched today in production within AnVIL to provide a platform for genomic data analysis for rare diseases. Broad's [Seqr](https://seqr.broadinstitute.org/) is an intuitive browser-based system
for analyzing rare disease exome and genome data on a family basis.

Seqr is an open source tool supported by the Translational Genomics Group
at the Broad Institute that runs on Google Kubernetes Engine (GKE) and
data is loaded using Google Dataproc Spark clusters.

The production instance uses postgres, which is a SQL database to
store project metadata and user-generated content (e.g variant notes)
and elasticsearch to store variant callsets.

![Seqr use cases](./_images/seqr-uses.png)

With the onset of key NHGRI datasets being ingested to AnVIL such as Center for Mendelian Genomics (CMG), 
Clinical Sequencing Evidence-Generating Research (CSER), and 
Transamerican Autoimmune Research Network (TARN), the availability of 
seqr will enable researchers to analyze and annotate their data with seqr in the AnVIL platform as well as collaborate with other investigators as they choose.

## Using Seqr in AnVIL
Researchers will need to bring their joint call files to the AnVIL to make use of seqr. 
If a joint call file is needed, researchers can make use of [GATK tooling](https://anvilproject.org/learn/anvil-mooc/use-case-gatk) which is also available within AnVIL.  

![Launching Seqr in Terra](./_images/seqr-in-terra.png)

To launch Seqr on a Terra workspace, navigate to the workspaces's Data tab, select the "Files" subtab" and select
the "Analyse in Seqr" in the top right of the page.