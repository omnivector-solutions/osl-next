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

### Install

If your running Ubuntu, Manjaro, KDE Neon & a [few others](https://snapcraft.io/docs/installing-snapd), Snap is most likely pre-installed and ready to go. If not, you can find instalation instrustions for distributions without snap pre-installed [here](https://snapcraft.io/docs/installing-snapd).

Confirm that you have snap installed correctly by typing the folling command in a terminal window:

```bash
snap help --all
```

You should see an output of available snap commands. If not, refer back to the install instructions for your specifc distro.

Once you have verified that snap is running, installing Slurm takes one simple command:

```bash
snap install slurm --classic
```

`note:` depending on your system level permissions, you may need to sudo.

This command will pull down the Slurm package from [snapcraft.io](https://snapcraft.io/store) and install it onto your system. The "--classic" parameter tells the snap daemon to install Slurm in Clasic Confinement mode. A snap’s confinement level is the degree of isolation it has from your system. Classic Confinement provides Slurm access to your system’s resources in much the same way traditional packages do. The Slurm snap can also be deployed using `strict` (default) or `devmode` confinement. You can read more about Snap confinement levels [here](https://snapcraft.io/docs/snap-confinement).

### Basic Configuration:

Now that Slurm is installed, it time to get it configured. The snap supports running different components of Slurm depending on what `snap.mode` has been configured.

The following `snap.mode` values are supported:

- `none`
- `all`
- `login`
- `munged`
- `slurmdbd`
- `slurmdbd+mysql`
- `slurmd`
- `slurmrestd`

Since we are installing on to a dev box, we will configure Slurm to run all if its daemons on a single resource:

```bash
snap set slurm snap.mode=all
```

The above command configures the `snap.mode` to `all` mode. This runs all of the Slurm daemons including MySQL and Munged in an all-in-one local development mode.

Thats it! Slurm is now installed with `snap.mode` set to `all`.

You can interact with individual services using `snap services`. Example:

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

The following Slurm related commands are now available:

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

### Logging

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

### Advanced Configuration

Configuration files can be found in under `/var/snap/slurm/common/var/etc`.

For testing purposes, you can manually edit the `.conf` files located under `/var/snap/slurm/common/etc/`. However, **any** changes you make to `slurm.conf` or `slurmdbd.conf` will be overwritten when the `snap.mode` is changed.

Persistent changes to the Slurm configuration files are made using the `.yaml` files located under `/var/snap/slurm/common/etc/slurm-configurator`. For example, if you wanted to change the port slurmd runs on, you would edit the `slurm.yaml` file here:

    /var/snap/slurm/common/etc/slurm-configurator/slurm.yaml

To apply any configuration changes to the above file, you need to restart the slurm daemons that run inside the snap. Assuming the `snap.mode=all`, run the following command:

    snap set slurm snap.mode=all

This will render the slurm.yaml -> slurm.conf and restart the appropriate daemons.

To modify the Node Healthcheck configuration, edit the file located here:

    /var/snap/slurm/common/etc/nhc/nhc.conf

NHC is run automatically by Slurmd and changes to `nhc.conf` take effect immediately.

When configuring Slurm to run as part of a large-scale compute cluster, remember to adjust the system configuration files according. More information about this can be found [here](https://slurm.schedmd.com/big_sys.html).

### Closing:
