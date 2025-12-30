import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useState } from "react";
import { Button, Input, Card, Typography } from "@material-tailwind/react";

const googleProvider = new GoogleAuthProvider();

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      // optional redirect
      // navigate("/rentals");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      await signInWithPopup(auth, googleProvider);
      // optional redirect
      // navigate("/rentals");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <Typography variant="h4" className="text-center mb-2">
          {isRegister ? "Create Account" : "Sign In"}
        </Typography>

        <Typography className="text-center text-gray-600 mb-6">
          {isRegister
            ? "Daftar untuk mulai menggunakan layanan"
            : "Masuk untuk melanjutkan penyewaan"}
        </Typography>

        <form onSubmit={handleEmailAuth} className="space-y-4">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && (
            <Typography className="text-sm text-red-500">
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            fullWidth
            disabled={loading}
            className="mt-2"
          >
            {loading
              ? "Processing..."
              : isRegister
              ? "Register"
              : "Sign In"}
          </Button>
        </form>

        <div className="my-4 flex items-center">
          <div className="flex-grow border-t" />
          <span className="mx-3 text-sm text-gray-400">OR</span>
          <div className="flex-grow border-t" />
        </div>

        <Button
          onClick={handleGoogleLogin}
          fullWidth
          variant="outlined"
          disabled={loading}
          className="flex items-center justify-center gap-2"
        >
          <img src="/google.png" alt="Google" className="w-5 h-5" />
          Continue with Google
        </Button>

        <Typography className="text-center text-sm mt-6">
          {isRegister ? "Sudah punya akun?" : "Belum punya akun?"}{" "}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-blue-600 font-medium"
            type="button"
          >
            {isRegister ? "Sign In" : "Register"}
          </button>
        </Typography>
      </Card>
    </div>
  );
}
