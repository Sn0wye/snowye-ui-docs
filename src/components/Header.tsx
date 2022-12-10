import Image from "next/image";
import { List } from "phosphor-react";
import { useState } from "react";
import Icon from "../../public/favicon.svg";
import styles from "./Header.module.scss";

type Link = {
  href?: string;
  label: string;
  content?: Link[];
};

function Header({ links }: { links: Link[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={styles.wrapper}>
        <Image
          className={styles.icon}
          src={Icon}
          alt="Favicon"
          width={45}
          height={45}
          onClick={() => {
            window.location.href = "/";
          }}
        />

        <div className={styles.menu}>
          {links.map((link) => {
            return (
              <div className={styles.dropdown} key={link.label}>
                <span
                  className={styles.item}
                  onClick={() => {
                    window.location.assign(link.href as string);
                  }}
                >
                  {link.label}
                </span>
              </div>
            );
          })}
        </div>

        <List
          size={35}
          className={styles.menuMobile}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </header>
      {isOpen && (
        <>
          <div className={styles.mobile}>
            {links.map((link) => {
              return (
                <span
                  key={link.label}
                  className={styles.item}
                  onClick={() => {
                    window.location.assign(link.href as string);
                  }}
                >
                  {link.label}
                </span>
              );
            })}
          </div>
          <div
            onClick={() => {
              setIsOpen(false);
            }}
            className={styles.back}
          />
        </>
      )}
    </>
  );
}

export { Header };
