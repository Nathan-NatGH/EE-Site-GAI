import { collection, query, where, getDocs, setDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../lib/firebase';
import { handleFirestoreError, OperationType } from '../lib/firestore-errors';

export async function getUserProgress(userId: string) {
  try {
    const q = query(collection(db, 'progress'), where('userId', '==', userId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, 'progress');
  }
}

export async function getLessonProgress(userId: string, lessonId: string): Promise<any> {
  try {
    const progressId = `${userId}_${lessonId}`;
    const docRef = doc(db, 'progress', progressId);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    }
    return null;
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, 'progress');
  }
}

export async function saveLessonProgress(userId: string, lessonId: string, score: number, completed: boolean) {
  try {
    const progressId = `${userId}_${lessonId}`;
    const docRef = doc(db, 'progress', progressId);
    
    await setDoc(docRef, {
      userId,
      lessonId,
      score,
      completed,
      lastAttemptAt: Date.now()
    }, { merge: true });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, 'progress');
  }
}
