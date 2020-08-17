---
title: "Installing Slurm via Snapcraft"
description: "This post walks through setting up a Slurm development machine using the Slurm Snap"
date: "2020-08-14"
author: "Cory Zimmerman"
image: "/images/present.png"
thumbnail: "/images/present-thumb.jpg"
---

Now that Slurm is available for download from the [Snap Store](https://snapcraft.io/slurm), I thought it might be helpfull to write a post on how get a development machine up and running in ALL mode.

If you're unfamiliar with Snaps, they are self-contained software packages that can be deployed across a range of Linux distros. Unlike other packaging tools, Snaps dont require a special adaptation for each Linux distribution. This is especially helpfull in the HPC world as each cluster may have its own unique Linux requirements. The Slurm Snap provides a single package that can be deployed on a CentOS or RedHat cluster the same way it would be deployed to Ubuntu.

### Install:

If your running Ubuntu, Manjaro, KDE Neon & a [few others](https://snapcraft.io/docs/installing-snapd), Snap is most likely pre-installed and ready to go. If not, you can find instalation instrustions for distributions without snap pre-installed [here](https://snapcraft.io/docs/installing-snapd).

Confirm that you have snap installed correctly by typing the folling command in a terminal window:

```bash
snap help --all
```

You should see an output of available snap commands. If not, refer back to the [install instructions](https://snapcraft.io/docs/installing-snapd) for your specifc distro.

Once you have verified that snap is running, installing Slurm takes one simple command:

```bash
snap install slurm --classic
```

`note:` depending on your system level permissions, you may need to sudo.

This command will pull down the Slurm package from [snapcraft.io](https://snapcraft.io/store) and install it onto your system. The "--classic" parameter tells the snap daemon to install Slurm in Clasic Confinement mode. A snap’s confinement level is the degree of isolation it has from your system. Classic Confinement provides Slurm access to your system’s resources in much the same way traditional packages do. The Slurm snap can also be deployed using `strict` (default) or `devmode` confinement. You can read more about Snap confinement levels [here](https://snapcraft.io/docs/snap-confinement).

### Basic Configuration:

Now that Slurm is installed, it's time to get it configured. The snap supports running different components of Slurm depending on what `snap.mode` has been configured.

The following `snap.mode` values are supported:

- `none`
- `all`
- `login`
- `munged`
- `slurmdbd`
- `slurmdbd+mysql`
- `slurmd`
- `slurmrestd`

Since we're deploying to a dev box, we will configure Slurm to run all if its daemons on a single resource:

```bash
snap set slurm snap.mode=all
```

The above command configures the `snap.mode` to `all`. This runs all of the Slurm daemons including MySQL and Munged in an all-in-one local development mode.

Thats it! Slurm is now installed with snap.mode set to all. This means that you are now running a fully functioning Slurm deploy on your machine.

You can verify that each of the respective Slurm services have started by using the `snap services` command:

```bash
$ snap services slurm

Service           Startup  Current  Notes
slurm.munged      enabled  active   -
slurm.mysql       enabled  active   -
slurm.slurmctld   enabled  active   -
slurm.slurmd      enabled  active   -
slurm.slurmdbd    enabled  active   -
slurm.slurmrestd  enabled  active   -
```

The following commands exposed via the snap, are now available:

- munge
- remunge
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
- version

Try the following to test out your install:

```bash
$ sinfo
PARTITION AVAIL  TIMELIMIT  NODES  STATE NODELIST
debug*       up   infinite      1   idle slurm-dev
```

```bash
$ scontrol ping
Slurmctld(primary) at slurm-dev is UP
```

```bash
$ srun -pdebug -n1 -l hostname
0: slurm-dev
```

### Logging:

All services log their stdout to journald. The logs can be accessed by typing the following:

    $ snap logs slurm.slurmrestd

or by using using the journal directly:

    $ journalctl -eu snap.slurm.slurmrestd

Certain services also write to log files which is only readble by root for security purposes. The following services write to log files:

- nhc
- slurmd
- slurmdbd
- slurmctld

Log files are found at `/var/snap/slurm/common/var/log/`. For example, the log for slurmctld can be found at:

    /var/snap/slurm/common/var/log/slurm/slurmctld.log

### Closing:

This post clearly demonstrates how simple it is to deploy Slurm to a single development box. Production deploments of Slurm usually require much more configuration and fine tuning. I will follow up soon with a post detailing how easy it now is to change advanced configurations options for multi-node deployments. Until then, join us on Discourse [here](https://community.omnivector.solutions/) or subscribe to our mailing list to receive future updates. Cheers!
