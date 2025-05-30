import React from 'react'
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
          <CompanionCard
            id="123"
            name="Neura The Brainy Explorer"
            topic="Neural Network of the brain"
            subject="science"
            duration={45}
            color="#ffda6e"
          />
          <CompanionCard
              id="456"
              name="The Growth Expert"
              topic="Scaling Your Business Successfully"
              subject="business"
              duration={20}
              color="#e5d0ff"
          />
          <CompanionCard
              id="789"
              name="Verba the Vocabulary Builder"
              topic="English Literature "
              subject="Language"
              duration={30}
              color="#BDE7ff"
          />
      </section>

        <section className="home-section">
            <CompanionsList
                title="Recently Completed Sessions"
                companions={recentSessions}
                classNames="w-2/3 maxx-lg:w-full"
            />
            <CTA />
        </section>
    </main>
  )
}

export default Page