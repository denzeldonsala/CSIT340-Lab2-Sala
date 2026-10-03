import SectionHeading from "./SectionHeading"
import ContactLink from "./ContactLink"

const ConactSection = () => {

return(
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
        <SectionHeading title="Contact" subtitle="Contact me." />

        <ul className="mt-8 space-y-3">
            <ContactLink
                label="Email"
                href="mailto:denzeldon.sala@cit.edu"
                text="denzeldon.sala@cit.edu"
            />

            <ContactLink
                label="Github"
                href="https://github.com/denzeldonsala"
                text="github.com/denzeldonsala"
            />

            <ContactLink
                label="MS Teams"
                href="https://teams.microsoft.com/l/chat/0/0?users=denzeldon.sala@cit.edu"
                text="Denzel Don L. Sala"
            />
        </ul>
    </section>
)

}

export default ConactSection