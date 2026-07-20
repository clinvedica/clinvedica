import { redirect } from 'next/navigation';

/** Legacy URL — cardiology content now lives at /therapeutic-area/cardiology */
export default function CardiovascularRedirectPage() {
  redirect('/therapeutic-area/cardiology');
}
