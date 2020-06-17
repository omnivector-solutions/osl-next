import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    padding: theme.spacing(2),
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    width: "100px",
  },
  logo: {
    height: "60px",
  },
  name: {
    ...theme.typography.body,
    fontSize: "1em",
  },
}));

const SlurmSnapDistros = () => {
  const classes = useStyles();

  const distros = [
    {
      name: "Arch Linux",
      link: "https://snapcraft.io/install/slurm/arch",
      logo: "/images/Distro_Logo_ArchLinux.svg",
    },
    {
      name: "CentOS",
      link: "https://snapcraft.io/install/slurm/centos",
      logo: "/images/Distro_Logo_CentOS.svg",
    },
    {
      name: "Debian",
      link: "https://snapcraft.io/install/slurm/debian",
      logo: "/images/Distro_Logo_Debian.svg",
    },
    {
      name: "elementary",
      link: "https://snapcraft.io/install/slurm/elementary",
      logo: "/images/Distro_Logo_Elementary.svg",
    },
    {
      name: "Fedora",
      link: "https://snapcraft.io/install/slurm/fedora",
      logo: "/images/fedora.png",
    },
    {
      name: "KDE Neon",
      link: "https://snapcraft.io/install/slurm/kde-neon",
      logo: "/images/Distro_Logo_KDE+Neon.svg",
    },
    {
      name: "Kubuntu",
      link: "https://snapcraft.io/install/slurm/kubuntu",
      logo: "/images/Distro_Logo_Kubuntu.svg",
    },
    {
      name: "Manjaro",
      link: "https://snapcraft.io/install/slurm/manjaro",
      logo: "/images/Distro_Logo_Manjaro.svg",
    },
    {
      name: "Linux Mint",
      link: "https://snapcraft.io/install/slurm/mint",
      logo: "/images/Distro_Logo_LinuxMint.svg",
    },
    {
      name: "openSUSE",
      link: "https://snapcraft.io/install/slurm/opensuse",
      logo: "/images/Distro_Logo_OpenSUSE.svg",
    },
    {
      name: "Enterprise",
      link: "https://snapcraft.io/install/slurm/rhel",
      logo: "/images/red-hat-2019-primary-stacked.svg",
    },
    {
      name: "Ubuntu",
      link: "https://snapcraft.io/install/slurm/ubuntu",
      logo: "/images/Distro_Logo_Ubuntu.svg",
    },
    {
      name: "RaspPi",
      link: "https://snapcraft.io/install/slurm/raspbian",
      logo: "/images/RGB+RPi.svg",
    },
  ];

  return (
    <Grid container spacing={0}>
      {distros.map((distro, index) => {
        return (
          <Grid item xs key={index}>
            <Button href={distro.link}>
              <Paper className={classes.paper}>
                <div className={classes.logoContainer}>
                  <img
                    alt={distro.name}
                    src={distro.logo}
                    className={classes.logo}
                  />
                  <Typography className={classes.name}>
                    {distro.name}
                  </Typography>
                </div>
              </Paper>
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SlurmSnapDistros;
