import { TeamMember, Service, ValueProps, FAQ } from './types';

export const HERO_IMAGES = {
  home: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ9rTsAEsWb41ib5OZUEoukGvsCtAdJHKnFleZdfu7mRGmbbC0cmZ8wbc9T1nKzh24myK3nYepcgLs-oVLjZVr1It6vl01PX7D3wYb64cDOUk7eF3sxorp6Mv8yjVlQ_ZoXBK-rTNSbnZ7km47Df5Ds2so2br-RokeYQK3abw5Piu4bLw2tb6b7QVxsb7Wen13ReDT0bYU99rOBTuocMKK10-aywK_7lzhuzZZKiUkwTGdsHbSEBnPRjjZUdqKRnutF4rBI_gdnA",
  services: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6b6GdEPKeaF4zqsPI31Sl25VrloQaVEbSDG51cyY1XpIIeZKRI5zWXepmby3Bh6opQDMxjQdR9K-Cj142iRQu9MbKKr-u32QAKrFeSogA4Q4o92mgD6W4y0fo0nsR3bXfuEOYOyniBAqRaHU969v8DoFagmatudFa_-8ns9Drylbs-EKbg1zhuNgr6cjMvPRUSbdKx4ES_7JbF-by5d7n3DA-3CQt0hBm-2gzYuRzo9LWmXdQp_39f0KlbLspwCwaC_TuRXkVZw",
  team: "https://lh3.googleusercontent.com/aida-public/AB6AXuDagIRhF1-0KCoBPZmhW5_bDqcdN2vuxrxCUjjhhzamq7XffU-Y3TOVXDL3V_0VbhBPBx3NnMdM9WNYk5pbE6Oo18JNdqC80HbdlXIuQcDLysZju2n2IFatw0MZBgo6ulIldjr9G9r3nPdXJFdMRtL3mbBzcR-wu_d8XsQnRm5ilr3ZWc9zaIm4yBfWqdq-HolLb-hOdO0JT2TtYZOey6S9kIJTknkTxruWx3MDWBLps_DhERtTOYEJg4nXK6glicBvfWsEgRwDog"
};

export const TRUSTED_USERS = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuChFyFNbnJrma0C8J-Wivi_WPHzfRHHeYEGlVbNkNzCGO9_3BdP6B_qqUJO0ZDePzNM5iBg_vplqsftPUuAhotvOiiWxykHErc0cM8af-F2GTtL1eMXxSRsCdXnP_NB6sjkv9YlfxB_xqA_PsEYTQhjWJZA_7QKQDUEta9_b8M9uyO5RDKpb_oBkQHeGT988xyhd7iQtTvSqy2rBtcwsN0n8BduSE7gS9CaIRakNu0ev0iT4GXQm3KUx1xeSXAw30vtvDdT9jSblw",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCSzir459Q72lZQXk8KJvfXC_v3F7X6llrV31bnzkHXx-UQKC3dQQ9KXf95MTq4LPjKXnvzc7MdlMZvKuegOnP9HUh-r03Vx-RD1544Mskcr-Jdry5nHRtUfMSpcsqKFk_LUnNrLgkdnuHSK5ZAnX9oKSxNR3QbTnXO4tJhy6ZBTqPTG_3_YIPr9BrId09zeD4BZhMFyVbLk4PWvLf2kHlANwj9c3NbnXKJ-30-M3CdzVTK68J967EJnNm7MlOXTHG4zcmEfCfmSg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CcLqP4oO4x3eEqWLN_46Lj-XlCA66-aDjW9MrrUJvKlRvKHit7RXBxNM80QzFPtb9Gc8R7_7MtuKPgo1SMtDTygcCO5NkNfdTxrxxWE-5Dc5_qh_7UxRj5aklQuxD-IBEpsya68YtCbahgc5bfDVwSk9-_Xdfq9T4jz8AKjlr3AmbCnzUJcX17i-iaUKLl74Nvwd-s1PLxVzc_ZtKhuMrIppaw9vW5NA2XbpawXRJ_c2bOOkrnesW7GwVAVuuqbz_Hr8AKjlLQ"
];

export const SERVICES: Service[] = [
  {
    title: "Individual Therapy",
    description: "One-on-one sessions tailored to your personal challenges and goals.",
    icon: "person"
  },
  {
    title: "Couples Counselling",
    description: "Strengthen your relationship through better communication and understanding.",
    icon: "diversity_3"
  },
  {
    title: "Child & Teen",
    description: "Supportive environments for young minds to navigate growing pains.",
    icon: "child_care"
  },
  {
    title: "Psychiatry",
    description: "Medical assessment and management of mental health conditions.",
    icon: "psychiatry"
  },
  {
    title: "Family Systems",
    description: "Addressing family dynamics and parenting support to foster a healthier home environment.",
    icon: "family_restroom"
  },
  {
    title: "Group Workshops",
    description: "Shared experiences facilitate healing and skill-building in a supportive community environment.",
    icon: "diversity_1"
  }
];

export const DETAILED_SERVICES: Service[] = [
  {
    title: "Cognitive Behavioral Therapy (CBT)",
    description: "Our specialized CBT sessions help you identify and challenge negative thought patterns. This structured approach is effective for treating specific phobias, anxiety disorders, and depression.",
    icon: "psychology_alt",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8emqWoZ-GZ-pYigJT9uWpip_ab8deJLf60QWRj41uE4QemdHqebVwVjIb7OUJUdpBWDt3uz6gnH7ZpCCzfsi3nGfbJvAg01d5KuYgaa-72Kp4pNT1Y2fKx3MBMViVu___MsGE1T0wqkZAlFiwjBgwi43xtrwUZ9zZMZB7VMoqfgH9_tJioTOHg09iXJcigcM-q9NWrGt5LhZ8zgYlt3yJBL7SuiwLkbsze1oFYGW0llMbsgniXbyZfw_f-usB4qF_trhV_5wevw",
    testimonial: {
      quote: "I learned practical tools to manage my anxiety that I use every single day. It felt like rewiring my brain for the better.",
      author: "Sarah J., Client"
    }
  },
  {
    title: "Holistic Mindfulness",
    description: "Integrating mindfulness practices with traditional psychotherapy. We focus on the connection between mind and body to reduce stress and improve overall well-being.",
    icon: "spa",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuArDhKjem-Z1vL_oS8btT1SUED2EmGqEC_kbnooJmL7LhCMrL819EK6Cwsf2ZoVhj_NfDYgpST1LhzecK5nfVmIOi3zqYHdSi8X7xWrDbp2o2JVVUp6uPJB0JWAH_Z-SXN7A_hRO4csT7dJZaSEDMyoZAimpzpUJIX9KtbaBmdHhRwtbIXbZ275wPbC2ufsSJTarXVFGDF-mXK8yWxds9FL7Y3fsUAXPGMv87EEl9dT1KPmj1uaVZqrnWXw-bwWTr8oryqUkawjPw",
    testimonial: {
      quote: "The breathing techniques and guided sessions gave me a sense of peace I hadn't felt in years.",
      author: "Michael R., Client"
    }
  },
  {
    title: "Child & Adolescent Therapy",
    description: "A safe, engaging environment for young minds to express themselves. We use play therapy and art therapy to help children navigate emotions and developmental challenges.",
    icon: "child_care",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1yFiKD1mbktaqcw_ce1Af_Ig4gy0DuHsAMw8yVGVECapfW5GzzU-e4nMV6_uP-p23rf3qOLert9bHmcePbnbGjL3E-zOmKsGNXM6_URqb1S8SFWHC5GtAC6SK_6a_Yra5ocpxqromObRYAYKEJMFnhmMhPy0m1gmCoZ-owO-F5U84zKoqF6GarkoZtdXRtKpPQ8XnwbaWv69s5N3BAf1Mf__TrVh_GRGvMqK-Pv5Cyd8bLKBDEG0z6JonLNYsYPNni9H8Yqy9Xg",
    testimonial: {
      quote: "We've seen such a positive change in our son's behavior and confidence since starting these sessions.",
      author: "The Thompson Family"
    }
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "Dr. Sarah Jenkins",
    role: "Clinical Psychologist",
    description: "Specializing in anxiety disorders and Cognitive Behavioral Therapy (CBT) with over 10 years of experience.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpIDmWXWpZP1SiKOp6qSWGDkIejz_lg2jxvHu17NE2aB-oCUJ2m0NqceJ7Pv9hoXvzYVni29QvhZgnB9UVCk190anrcrywG3a6t8Yzg76oGyI4IpJNYwjnFQbjmvyM87SNjhoXBh3Y7KwKsDQjukFQQK06GWK6Unfbh7j6v5uYAbF6R9YqnX-E5HpWTGCy-ekAdvrZJi1k-QjQH25a7dTzsfRL8yxagZ-gla-5j2cIK9AlQ7bJhevw-pFXcCgs6wvf7OjoTyDJTQ"
  },
  {
    name: "Mark Doe, LMFT",
    role: "Family Therapist",
    description: "Focusing on family dynamics, relationship counseling, and adolescent behavioral issues.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxKtURdDwOiAFPPUCDoe-WTqkhGSrRYFcozvtKr4Elc3RYF2P87yhoQPp7bOnuOvBmw-DUehAjeIbKSiJBncoubB5A134QHZbg7M-uY1HPet6aJWBxrdjsPoH8qO1-rKCfuHx3HuvFfUhOYXj5v1rykZuPYxRFGT-jF0Go5mCgfYEug2AadPp6KIT21tQKlfXV7yiQBgP56_IQNNUtLiEjK2pZiguHKSAIF6ntIw8y2s910OpWldzC1dCMmJZS3MdwqO8V0rwN6A"
  },
  {
    name: "Dr. Emily Chen",
    role: "Psychiatrist",
    description: "Expert in mood disorders, medication management, and integrative psychiatric care.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpAeY2efi8aIkNsAbioZ74Lj6d6mhyRsqVVP7f6DRmOJ80aHiMYrpTnjSUQayBZF3Eg-mYnQpk128knutkOxc_K4D7F_VX8XFjqC4XiRG23Ie0Utf27F48kqNNJmZIMokFagkLDhGLe9p48qI22oaFE0HidAkAG-WdE6klcbQ1VO9BgiihkI8B_QunVy74CTMaQ3DB-5N71f-CqY2HPWinNPRBIqg5YLZNH7D8ZCpSoANPzp4sJAmxpGMN4fRJ4wYE-dH23QUjYw"
  },
  {
    name: "James Wilson, LCSW",
    role: "Trauma Specialist",
    description: "Dedicated to trauma recovery using EMDR and somatic experiencing techniques.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdpnHWezUH9M0KEiWEAxTXwndrxEyeHhsk4jyMLQPQ3TBCp9EulQQ3EhywM2X67fmUe5jK830tiXWIR8TqDql3QwZKJPIR2yRcPAgOyGGHC4RhvIhhZY3rGyY--esJ-RuSwzzpBQO2IKbIxGGI9fjr-4xZr_fXrBxv3r0SULMWGZnzlfxWZ8lRIP5oQEicjuiCGMll3k2SuB5yaR7pUfcXqgCFrQmfeoU6GIWam7FPDq-1OTGKE9dHNsx_4Khu4IaVjPuG_wr-2g"
  },
  {
    name: "Dr. Anita Roy",
    role: "Child Psychologist",
    description: "Specializing in play therapy and developmental assessments for children aged 3-12.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGHJFC-J0lsjZC1hOBOIqHyMhBZNxilRiBohJ34Ew0A47PdvF4ebFMGpk3jicBy49oIV-dNW4qOpMh0UsMfNQcYZzEAkvtWhLQa2_zd9Gloiah3x3jQf9FR_aTqdc6gjzEKQUts6rP9QyhhdpJzmQBvHGtLcfOOg9FmDaAJ51XMFKrpXO3yinRBa5UvGv23eODLgvklTOftllZ1V0SwbV1jg2CpKtiGdQnRKvQGGDD14S2K7_vLUqAfQXr2j6o7bcTXa6NRnPpoQ"
  },
  {
    name: "Michael Ross",
    role: "Addiction Counselor",
    description: "Helping individuals overcome substance abuse through compassionate, evidence-based recovery plans.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmQ98oGBbV6s19YogoWkfg6RDA2l5anrXb-F28NDKtGXX5el2-NComIj2T2rXV_pOttdj6xlEn7vmbGcJAd9YaIupR6JRYtCx9rHoCCq1JmEFl81LDexHfsboS0oUA501YWmA9eJzIlkjXYZKhtnTLFdR83U4hhE4QXJTmnh5C8VUgJkeKWMDIJ0gmdlWB2LopNbw8MVBzaKp_pq9vXr1Ezb3CBNVmqeiHfCxouAs6R862QNopI__xJSodz-hEVDq5c9Ww1qu1_w"
  },
  {
    name: "Lisa Wong",
    role: "Art Therapist",
    description: "Using creative expression to foster healing and mental well-being for clients of all ages.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYw-Yq491wH3PPFe1vsQPVJR883ihPiKmkL13aH1h_5sy68l3OKRnutfRUWzot3PvXxoCfu1N-2gDCvE84_zqD2aGByl6up6j-jvxQEm06BzbI25Y1LX7F1oBW-472xCzdMAIuLWilhc9mVD0vTMNZQwBD-3LIJzrbs-dvRmfyzmLiykah27_poN53HUNZbKXDQOM81L68nXnVXNjzg_jlKBcG4DrVg5wJ7gtXqGDQvGD1shTF9NJ8Fnsmb8_Tql6BzQyEp8XOEQ"
  },
  {
    name: "David Kim",
    role: "Grief Counselor",
    description: "Supporting clients through the difficult process of loss, bereavement, and life transitions.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvpmeYMn4zoL81Ac-o8ikxfPaXSizDOi5UFXmSmFGyTMpS8TRdAWB1fh2VQ-eU4j3oc5c-QBHG4fbW8uK9RhgRjEAHq_7PjPqnsZmHJhKu5lr9PIvTsR7Pn305MfqrgUTEKB0D3I5znnjXgGxNQmnFvL_v3LS4XGl8go9QmP3-9cYWvGh6EGfxh9L4r3kE3vd9eGQWousYjllbAUxoPnKXtQwMalxqCMfklOHeP--3HV916HtRKDsSIQ6UTulJ3aKs4zbsEdGYHQ"
  }
];

export const VALUES: ValueProps[] = [
  {
    title: "Our Mission",
    description: "To provide accessible, high-quality mental health care that empowers individuals to reclaim their lives and find their inner strength.",
    icon: "favorite"
  },
  {
    title: "Our Vision",
    description: "A world where mental health is prioritized without stigma, where support is readily available, and where emotional resilience is nurtured.",
    icon: "visibility"
  },
  {
    title: "Our Values",
    description: "Empathy, Integrity, and Confidentiality guide every interaction. We create safe spaces where vulnerability is met with unconditional support.",
    icon: "diversity_3"
  }
];

export const FAQS: FAQ[] = [
  {
    category: "General",
    question: "How do I schedule an appointment?",
    answer: "You can schedule an appointment by clicking the 'Book Consultation' button at the top of our website, or by calling our main office at 330 2113 or 737 2113. We offer online booking for your convenience."
  },
  {
    category: "General",
    question: "Do you offer telehealth or remote sessions?",
    answer: "Yes, we offer secure, HIPAA-compliant video therapy sessions for all our services. When booking, simply select 'Telehealth' as your preferred location."
  },
  {
    category: "Therapy & Process",
    question: "What should I expect during my first session?",
    answer: "The first session, or intake, is primarily about gathering information. Your therapist will ask about your history, current concerns, and goals for therapy. It's also a chance for you to ask questions and see if you feel comfortable with the therapist."
  },
  {
    category: "Therapy & Process",
    question: "How long are therapy sessions?",
    answer: "Standard individual therapy sessions are typically 50 minutes long. Group sessions and certain specialty appointments may vary in length from 60 to 90 minutes."
  },
  {
    category: "Therapy & Process",
    question: "How long does therapy take?",
    answer: "The duration of therapy varies greatly depending on the individual and their goals. Some clients see improvement in 6-12 sessions, while others may benefit from longer-term support. Your therapist will discuss a treatment plan with you."
  },
  {
    category: "Insurance & Billing",
    question: "Do you accept insurance?",
    answer: "We are in-network with most major insurance providers, including Blue Cross Blue Shield, Aetna, Cigna, and UnitedHealthcare. We verify benefits prior to your first appointment."
  },
  {
    category: "Insurance & Billing",
    question: "What if I don't have insurance?",
    answer: "For clients without insurance or those preferring not to use it, we offer competitive self-pay rates. We also have a sliding scale fee structure based on income for those who qualify."
  },
  {
    category: "Confidentiality",
    question: "Is what I say in therapy confidential?",
    answer: "Yes, confidentiality is a cornerstone of therapy. Information you share is protected by law and ethical standards. Exceptions are made only in specific situations regarding safety (e.g., harm to self or others)."
  }
];