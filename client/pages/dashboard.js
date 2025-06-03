import { useSession, signOut } from 'next-auth/react';

export default function Dashboard() {
  const { data: session } = useSession();

  if (!session) {
    return <p className="p-4">Вы не авторизованы</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Личный кабинет</h1>
      <p>Вы вошли как: {session.user.email}</p>
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        onClick={() => signOut()}
      >
        Выйти
      </button>
    </div>
  );
}
