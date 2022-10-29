import { useEffect, useState } from 'react';
import { firestore } from '../firebase';
import { addDoc, collection, getDocs, query } from '@firebase/firestore';

interface NameList {
  name: string;
}

export default function Home() {
  const [name, setName] = useState<string>('');
  const [nameList, setNameList] = useState<NameList[]>();
  const namesCollection = collection(firestore, 'names');

  useEffect(() => {
    getNameList();
  }, []);

  const getNameList = async () => {
    const q = query(collection(firestore, 'names'));
    const querySnapshot = await getDocs(q);

    let queryList: NameList[] = [];
    querySnapshot.forEach((doc) => {
      queryList.push({
        name: doc.data().name,
      });
    });

    if (queryList !== undefined) {
      setNameList(queryList);
    }
  };

  const saveName = async () => {
    const data = {
      name,
    };

    try {
      addDoc(namesCollection, data);
    } catch (error) {
      console.error(error);
    }

    getNameList();
  };

  return (
    <div>
      <p>Name</p>
      <input
        type='text'
        value={name}
        onChange={(inputText) => setName(inputText.target.value)}
      />
      <button onClick={saveName}>Save</button>
      <hr />
      <ul>
        {nameList?.map(({ name }) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
}
