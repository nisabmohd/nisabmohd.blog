import Link from "next/link";
import {
  AppHeader,
  DeveloperRow,
  Highlights,
  Screens,
  WhatsNew,
  appMetadata,
  midApps,
} from "@/components/app-page";
import { unpeep } from "@/lib/apps";

// The icon, facts, screenshots, What's new and description come from github.com/nisabmohd/unpeep,
// rebuilt at most once an hour. The intro, highlights and feature list are written here.
export const revalidate = 3600;

export const generateMetadata = () => appMetadata(unpeep);

export default function UnpeepPage() {
  return (
    <main>
      <AppHeader app={unpeep} back={{ href: "/#projects", label: "All projects" }} />
      <article className="prose">
        <p>
          <strong>Unpeep</strong> is a hidden camera and tracker finder for
          Android, made by {midApps.name}. Use it to check a hotel room, a
          rental, a trial room, a washroom, an office or a car before you
          relax in it. It tells you plainly what it checked, what it found and
          what it couldn&apos;t check. It works without an account, and your
          results stay on your phone.
        </p>

        <Screens app={unpeep} />

        <Highlights
          app={unpeep}
          items={[
            {
              icon: "wifi",
              title: "Finds cameras on the Wi-Fi",
              text: "Unpeep asks the devices on the Wi-Fi you joined what they are, and flags the ones that answer like cameras, each with the reason why.",
            },
            {
              icon: "lens",
              title: "Spots a lens with your torch",
              text: "A camera lens shines back at a torch. Unpeep rings the small bright dots, and its infrared finder shows night-vision lights in the dark.",
            },
            {
              icon: "note",
              title: "Honest about its limits",
              text: "It never says a room is safe. Every report lists what couldn't be checked, because no app can find a camera that sends nothing.",
            },
            {
              icon: "shield",
              title: "Nothing leaves your phone",
              text: "No account, no ads, no analytics, no AI. A scan only talks to devices on the network you are on.",
            },
          ]}
        />

        <WhatsNew app={unpeep} />

        <h2>Everything it does</h2>

        <h3>Seven checks, one sweep</h3>
        <ul>
          <li>
            <strong>Wi-Fi:</strong> finds the devices on the Wi-Fi you joined
            and flags the ones that look like cameras (ONVIF, video streams,
            camera ports, camera makers), each with the reason.
          </li>
          <li>
            <strong>Hotspots:</strong> lists the Wi-Fi names around you and
            flags the ones cheap cameras broadcast for setup, then helps you
            walk to one.
          </li>
          <li>
            <strong>Bluetooth:</strong> listens for trackers such as AirTags,
            Tiles, SmartTags, Chipolos and Find Hub tags, and for Bluetooth
            cameras.
          </li>
          <li>
            <strong>Lens finder:</strong> the torch and the rear camera ring
            small, bright dots that may be a lens. Red and contrast filters,
            zoom, and photos as proof.
          </li>
          <li>
            <strong>Infrared:</strong> the front camera shows the infrared
            lights of night-vision cameras in the dark, after a quick test
            with a TV remote.
          </li>
          <li>
            <strong>Magnet:</strong> learns the room&apos;s normal magnetic
            field and shows when it jumps near an object, which means
            electronics inside. It never calls that a camera.
          </li>
          <li>
            <strong>Checklist:</strong> the places worth a look by hand in a
            stay, a trial room, a washroom, an office or a car, and how to
            check a mirror.
          </li>
        </ul>

        <h3>Results you can trust</h3>
        <ul>
          <li>Every finding says why it was flagged.</li>
          <li>Mark anything that isn&apos;t a camera as yours or the room&apos;s, and undo it any time.</li>
          <li>
            A report lists what was checked, what was found, your photos, and
            what couldn&apos;t be checked. Export it as a PDF.
          </li>
        </ul>

        <h3>If you find something</h3>
        <ul>
          <li>Steps to follow, and the emergency numbers where you are. They work offline.</li>
        </ul>

        <h2>Your data</h2>
        <p>
          Unpeep has no account, no ads, no analytics, no crash reporting and
          no AI service. Reports and photos are saved in the app&apos;s own
          storage and leave your phone only when you export or share them.
          During a scan Unpeep talks only to devices on the local network you
          are on. The details, and why it asks for each permission, are in
          the <Link href="/unpeep/privacy">privacy policy</Link>.
        </p>

        <h2>Free and open source</h2>
        <p>
          Unpeep is free under the GNU GPL v3. The code, issues and releases
          are on <a href="https://github.com/nisabmohd/unpeep">GitHub</a>. The
          list of camera makers and device names it knows is kept there too,
          so anyone can add a camera it missed. It is coming to Google Play
          and F-Droid.
        </p>

        <h2>Contact</h2>
        <p>
          Questions, ideas or bugs: write to{" "}
          <a href={`mailto:${midApps.email}`}>{midApps.email}</a>, or{" "}
          <a href="https://github.com/nisabmohd/unpeep/issues">open an issue</a>.
        </p>
      </article>
      <DeveloperRow />
    </main>
  );
}
