"use client"
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import styles from "./userpage.module.css";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Link from "next/link";

const Logout = () => {
  const { data: session } = useSession();
  const imageUrl = session?.user?.image || "/irfan_sitting.png";
  const email = session?.user?.email;
  const role = session?.user?.role;
  const [items, setItems] = useState([]);
  const [messages, setMessage] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  const getData = async () => {
    try {
      const data = await fetch(process.env.NEXT_PUBLIC_USER_API);

      if (!data.ok) {
        throw new Error("Failed to fetch data");
      }
      const userData = await data.json();
      setItems(userData);
    } catch (error) {
      console.error("Error:", error);
    }
  };


  const getMessage = async () => {
    try {
      const data = await fetch(process.env.NEXT_PUBLIC_MESSAGE_API);

      if (!data.ok) {
        throw new Error("Failed to fetch data");
      }
      const userData = await data.json();
      setMessage(userData);
    } catch (error) {
      console.error("Error:", error);
    }
  };





  useEffect(() => {
    getMessage()
    getData();
  }, []);

  console.log(messages);

  const SearchHandle = (e) => {
    setSearchItem(e.target.value);
  };

  const filteredRows = useMemo(() => {
    return Array.isArray(items.users)
      ? items.users.filter((row) => {
          if (searchItem) {
            return row.name.toLowerCase().includes(searchItem.toLowerCase());
          }
          return true;
        })
      : [];
  }, [searchItem, items.users]);

  return (
    <div className={styles.logoutContainer}>
      {(role === "owner") ? (
        <div className={styles.adminContainer}>
          <div className={styles.adminHeader}>
            <label htmlFor="search" className={styles.label}>
              Search
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search"
              name="search"
              onChange={SearchHandle}
              className={styles.searchInput}
            />
          </div>
          <table className={styles.userTable}>
            <thead className={styles.thead} >
              <tr className={styles.tr}>
                <th className={styles.th} >Name</th>
                <th className={styles.th} >Email</th>
                <th className={styles.th} >Joining Date</th>
                <th className={styles.th} >Role</th>
                <th className={styles.th} >Actions</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {filteredRows.map((item) => (
                <tr key={item._id} className={styles.tr}>
                  <td className={styles.td}>{item.name}</td>
                  <td className={styles.td}>{item.email}</td>
                  <td className={styles.td}>{item.createdAt.substr(0, 10)}</td>
                  <td className={styles.td}>{item.role}</td>
                  <td className={styles.td}>
                    <Link href={`/dashboard/userpage/edit/${item._id}`}>
                      <FaEdit className={styles.editIcon} />
                    </Link>
                    <Link href={`/dashboard/userpage/delete/${item._id}`}>
                      <FaTrash className={styles.deleteIcon} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={() => signOut()} className={styles.btn}>
            Log Out
          </button>
          <div className={styles.adminMessage}>
      {messages.map((msg) => (
        <div key={msg._id} className={styles.messageContainer}>
          <div className={styles.msgHeader}>
            <div className={styles.msgDate}>{msg.createdAt.substr(0, 10)}</div>
            <div className={styles.senderName}>{msg.senderName}</div>
            <div className={styles.number}>{msg.number}</div>
            <Link href={`/dashboard/userpage/deletemsg/${msg._id}`}>
                      <FaTrash className={styles.deleteIcon} />
                    </Link>
          </div>
          <div className={styles.subject}>{msg.subject}</div>
          <div className={styles.messageContent}>{msg.message}</div>
        </div>
      ))}
    </div>
        </div>
      ) : (
        <div className={styles.userContainer}>
          <div className={styles.imageContainer}>
            <Image src={imageUrl} alt="User Account" width={50} height={50} className="small-rounded-img" />
          </div>
          <div className={styles.userInfo}>
            <div className={styles.userInfoItem}>
              <span className={styles.span}>Name:</span> {session?.user?.name}
            </div>
            <div className={styles.userInfoItem}>
              <span className={styles.span}>Email:</span> {session?.user?.email}
            </div>
            <div className={styles.userInfoItem}>
              <span className={styles.span}>Role:</span> {session?.user?.role}
            </div>
          </div>
          <button onClick={() => signOut()} className={styles.btn}>
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Logout;
