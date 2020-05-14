---
title: "Anouncing the release of Slurm Workload manager to the Canonical Snap store 4."
description: "This is a description of the post 4."
date: "2020-07-05"
author: "Joe Blow"
image: "/images/devops.jpg"
---

![slurm logo](/images/slurm.png)

<p align="center"><b>This is the snap for the Slurm Workload Manager</b>, <i>"The Slurm Workload Manager (formerly known as Simple Linux Utility for Resource Management or SLURM), or Slurm, is a free and open-source job scheduler for Linux and Unix-like kernels, used by many of the world's supercomputers and computer clusters."</i></p>

<!-- Re-add the section below once we have a delivery method -->
<!-- # Install

    sudo snap install slurm

([Don't have snapd installed?](https://snapcraft.io/docs/core/install))

<p align="center">Built & Published with 💝 by <a href="https://www.omnivector.solutions">OmniVector Solutions</a>.</p> -->

## Installation

Upon installation this snap will not try to run any daemons until the `physical-memory-control` and `network-control` interfaces have been connected and `snap.mode` config has been set to a supported value.

#### Install form Snapstore

```bash
sudo snap install slurm
```

#### Connect Interfaces

Connect the `physical-memory-control` and `network-control` interfaces:

```bash
sudo snap connect slurm:network-control
sudo snap connect slurm:physical-memory-control
```

#### Set `snap.mode` Config

The following `snap.mode` values are supported:

- `none`
- `all`
- `login`
- `munged`
- `slurmdbd`
- `slurmctld`
- `slurmd`
- `slurmrestd`

To configure this snap to run a different set of daemons, just set the `snap.mode`:

```bash
sudo snap set slurm snap.mode=all
```

The above command configures the `snap.mode` to `all` mode. This runs all of the Slurm daemons including MySQL and Munged in a all in one local development mode.

`all` mode is a core feature of this software, as there currently exists no other way to provision a fully functioning slurm cluster for development use.

When the above steps have been completed you will have a Slurm deploy running inside the snap.

## Usage

This snap supports running different components of slurm depending on what `snap.mode` has been configured.

#### Supported Daemons

- slurmdbd/mysql
- slurmctld
- slurmd
- slurmrestd

### Supported User Commands

- sacct
- sacctmgr
- salloc
- sattach
- sbatch
- sbcast
- scancel
- scontrol
- sdiag
- sinfo
- sprio
- squeue
- sreport
- srun
- sshare
- sstat
- strigger

### Other Components

##### Daemons

- munged

##### User Commands

- slurm-version
- mungekey
- munge
- unmunge
- mysql-client
- snap-mysqldump

## Remaining Tasks

- [ ] Support strict confinement
- [ ] Built-in [NHC](https://github.com/mej/nhc) service
- [ ] Automated builds with TravisCI
- [ ] Publish to Snap Store

#### Copyright

- OmniVector Solutions <admin@omnivector.solutions>
