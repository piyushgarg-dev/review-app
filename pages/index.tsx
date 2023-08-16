import SetupPage from "@/components/SetupPage";
import RootLayout from "@/layouts/RootLayout";
import SetupLayout from "@/layouts/SetupLayout";

export default function Home() {
  return (
    <RootLayout>
      <SetupLayout>
        <SetupPage />
      </SetupLayout>
    </RootLayout>
  );
}
