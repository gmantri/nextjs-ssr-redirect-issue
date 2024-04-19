import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

export default function Home() {
  const doRedirect = async () => {
    'use server';
    redirect('/');
  }

  const loadButtonComponent = () => {
    const ButtonComponent = dynamic(() => import('./Button.client'));
    return (
      <ButtonComponent onClick={doRedirect} />
    )
  }

  const loadClientComponent = () => {
    const ClientComponent = dynamic(() => import('./Component.client'));
    return (
      <ClientComponent />
    )
  }

  return (
    <div>
      My NextJS APP - {new Date().toISOString()}

      <div>
        {loadButtonComponent()}
      </div>
      <div>
        {loadClientComponent()}
      </div>
    </div>
  );
}
