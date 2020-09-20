export function docRefToArray<CollectionType>(
  docRef: firebase.firestore.QuerySnapshot
) {
  return docRef.docs.map((entry: any) => {
    return { id: entry.id, ...entry.data() };
  }) as CollectionType[];
}

export function docToObject<DocType>(doc: firebase.firestore.DocumentSnapshot) {
  if (doc.exists) {
    const data = doc.data();
    if (data && data.id == null) {
      data.id = doc.id;
    }
    return data as DocType;
  }

  return null;
}

export const getTimestamp = (timestamp: Date = new Date()) => {
  return {
    epoch: timestamp.getTime(),
    iso_8601_datetime_tz: timestamp.toISOString(),
  };
};
