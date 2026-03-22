import { Image, Text, NavLink, Group } from "@mantine/core";
import hh from '../../assets/hh.png';
import Ball from '../../assets/Ball.png';
import User from '../../assets/User.png';
import classes from "./Header.module.css";
import clsx from "clsx";

export const Header = () => {
  return (
    <header className={classes.header}>
      <Group className={classes.logo}>
       <Image className={classes.logo__img} src={hh} alt="HH logo" />
        <Text className={classes.text}>.FrontEnd</Text>
      </Group>

      <Group className={classes.nav}>
        <NavLink
          href="#"
          label="Вакансии FE"
          className={clsx(classes["nav__link"], classes["nav__link-vacancies"])}
          rightSection={<Image src={Ball} alt="Ball icon" />}
        />
        <NavLink
          href="#"
          label="Обо мне"
          className={clsx(classes["nav__link"], classes["nav__link-profile"])}
          leftSection={<Image src={User} alt="User icon" />}
        />
      </Group>
    </header>
  );
};

 