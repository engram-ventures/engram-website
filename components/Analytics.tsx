import { GoogleAnalytics } from "@next/third-parties/google";

type Props = {
  gaId: string | undefined;
};

export default function Analytics({ gaId }: Props) {
  if (!gaId) return null;
  return <GoogleAnalytics gaId={gaId} />;
}
