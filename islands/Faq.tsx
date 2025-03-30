/** islands/Faq.tsx **/
import { useState } from "preact/hooks";

interface FaqItem {
    question: string;
    answer: string;
}

const FAQ_DATA: FaqItem[] = [
    {
        question: "What does a book coach do?",
        answer:
            "A book coach is part word witch, part writing teacher, and part cheerleader. I’ll draw on my background as a writing instructor and expert in the creative process to offer you incisive feedback on your drafts, helping you hone your style, enhance your writing practice, and tell the best possible story. \n" +
            "\n" +
            "I’ll be there as a source of external support (and accountability) through all the highs and lows of the writing process, pointing out paths you can take when the woods seem dark and perilous. \n" +
            "\n" +
            "My job isn’t to tell you what to do, but to support you in finding new ways to access the creative magic you already possess.  \n",
    },
    {
        question: "What’s your coaching style?",
        answer:
            "As comedian, writer, and musician Steve Martin said, “Some people have a way with words, and other people…not have way.” I have a way of helping people find their way with words.\n" +
            "\n" +
            "There’s no one-size-fits-all approach to writing. That bedrock belief informs everything we’ll do together. I know a lot (like, a lot) about writing-related best practices and the publishing process—but you’re the expert on your life and needs. \n" +
            "\n" +
            "Together, we’ll collaborate on a customized writing practice that feels magical and supportive. \n" +
            "\n" +
            "When you arrive at our coaching sessions, whether a single meeting or one of many, you can expect me to be fully present and prepared with thoughts, questions, and suggestions. \n" +
            "\n" +
            "I will never uncap the dreaded red pen and tear your writing apart—but I’m not afraid to push you to do your best work. One of my gifts is seeing the potential in every writing project. I’ll help you find the stepping stones to turn that potential into reality.\n",
    },
    {
        question: "How do I know what option is right for me?",
        answer:
            "If you have a completed manuscript and are eager to get to the next steps, check out the Manuscript Review and Book Proposal services. A Manuscript Review puts my eagle eye on your draft. A Book Proposal prepares you to tackle the traditional publishing process. If you’re starting a new book, feel stuck partway through a draft, or want help and feedback as you write, check out the Get Unstuck Session and 1:1 Coaching. Get Unstuck Sessions are great for breaking through specific story problems and generating project plans. 1:1 Coaching is ideal if you want long-term support. If you’re a thought leader, creative, or entrepreneur who’s bursting at the seams with an incredible nonfiction book idea and your schedule is bursting at the seams with prior commitments, let’s talk about Ghostwriting.",
    },
    {
        question: "I know what I want help with—where do we start?",
        answer:
            "You can sign up for a Get Unstuck Session right from the link above. From there, you’ll get a series of emails that will collect the information I need and provide you with meeting options so we can get together at a time that works for your schedule. For 1:1 Coaching, Manuscript Review, Book Proposal, and Ghostwriting work, the first step is to schedule a free 30-minute meeting. We’ll discuss your book and needs in more detail and decide if we’re a good fit before moving forward.",
    },
    {
        question: "What are your credentials?",
        answer:
            "I have a bachelor’s degree in creative writing from Ohio University, a master’s degree in rhetoric and writing from the University of Findlay, and a PhD in rhetoric and writing studies from Bowling Green State University. (I liked school; what can I say?) \n" +
            "\n" +
            "I have designed and taught university writing courses, coached and judged for a state writing competition, written and published a book and multiple peer-reviewed academic articles, and completed a Poynter ACES Certificate in Editing.\n" +
            "\n" +
            "I launched The Writing Desk in 2021. Since then, I have coached and edited authors working on novels, nonfiction, and academic books. Authors I’ve supported have gone on to land traditional publishing contracts with major publishers and pursue self-publishing and hybrid publishing. I have ghostwritten multiple published nonfiction books on a range of topics. \n" +
            "\n" +
            "I read and write extensively on writing habits and practices, habit formation, and the publishing process. I regularly attend industry conferences and trainings to provide the best support and advice to the writers I coach. \n",
    },
    {
        question: "Does book coaching guarantee my book will get published?",
        answer:
            "There is no guarantee that coaching will produce any specific level of success in your writing practices or provide a particular outcome, including publishing (sorry!). \n" +
            "\n" +
            "Numerous factors contribute to determining your publishing experience and results, and, as with any class, training experience, or coaching relationship, your results are determined in part by how you apply the material. \n" +
            "\n" +
            "When it comes to traditional publishing, luck is also a component! If I’d figured out how to control publishing’s luck of the draw, I’d be the world’s first gazillionaire. \n",
    },
    {
        question: "I want to work with you, but I can’t afford it. What should I do?",
        answer:
            "My weekly newsletter, <a href='https://usethewritingdesk.kit.com/profile' target='_blank' style='color: #56b4c7'>Word to the Wise</a>, is 100% free—and I pack it full of practical writing advice and inspiring interviews with working writers. I also offer occasional low-cost writing challenges and other resources, which you can learn about in Word to the Wise!\n",
    },
];

export default function Faq() {
    // Keep track of which index is open. If no item is open, store null.
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Toggles the clicked FAQ; if it’s already open, close it (set null); otherwise, open it.
    const handleToggle = (index: number) => {
        setOpenIndex((current) => (current === index ? null : index));
    };

    return (
        <div class="faq-container">
            {FAQ_DATA.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                    <div
                        class={`faq-item ${isOpen ? "active" : ""}`}
                        key={item.question}
                        onClick={() => handleToggle(index)}
                    >
                        <div
                            class="faq-question"

                        >
                            <span>{item.question}</span>
                            {/* Use a rotation transition for the arrow */}
                            <span class="faq-arrow">{isOpen ? "▲" : "▼"}</span>
                        </div>
                        <div class={`faq-answer ${isOpen ? "open" : ""}`}  dangerouslySetInnerHTML={{ __html: item.answer }}/>
                    </div>
                );
            })}
        </div>
    );
}
