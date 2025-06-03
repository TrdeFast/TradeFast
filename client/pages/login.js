import { signIn } from 'next-auth/react';

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="px-6 py-2 bg-blue-600 text-white rounded"
        onClick={() => signIn('google')}
      >
        Войти через Google
      </button>
    </div>
  );
}
