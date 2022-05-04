import type { Prisma, Company, Contact, Project, Meeting, MeetingReview, MeetingAttendee, Post, User, Account, Session, VerificationToken } from "@prisma/client";
export default interface PrismaTypes {
    Company: {
        Name: "Company";
        Shape: Company;
        Include: Prisma.CompanyInclude;
        Select: Prisma.CompanySelect;
        Where: Prisma.CompanyWhereUniqueInput;
        Fields: "Contact";
        RelationName: "Contact";
        ListRelations: "Contact";
        Relations: {
            Contact: {
                Shape: Contact[];
                Types: PrismaTypes["Contact"];
            };
        };
    };
    Contact: {
        Name: "Contact";
        Shape: Contact;
        Include: Prisma.ContactInclude;
        Select: Prisma.ContactSelect;
        Where: Prisma.ContactWhereUniqueInput;
        Fields: "company" | "MeetingAttendees" | "MeetingReview";
        RelationName: "company" | "MeetingAttendees" | "MeetingReview";
        ListRelations: "MeetingAttendees" | "MeetingReview";
        Relations: {
            company: {
                Shape: Company;
                Types: PrismaTypes["Company"];
            };
            MeetingAttendees: {
                Shape: MeetingAttendee[];
                Types: PrismaTypes["MeetingAttendee"];
            };
            MeetingReview: {
                Shape: MeetingReview[];
                Types: PrismaTypes["MeetingReview"];
            };
        };
    };
    Project: {
        Name: "Project";
        Shape: Project;
        Include: Prisma.ProjectInclude;
        Select: Prisma.ProjectSelect;
        Where: Prisma.ProjectWhereUniqueInput;
        Fields: "Meetings";
        RelationName: "Meetings";
        ListRelations: "Meetings";
        Relations: {
            Meetings: {
                Shape: Meeting[];
                Types: PrismaTypes["Meeting"];
            };
        };
    };
    Meeting: {
        Name: "Meeting";
        Shape: Meeting;
        Include: Prisma.MeetingInclude;
        Select: Prisma.MeetingSelect;
        Where: Prisma.MeetingWhereUniqueInput;
        Fields: "User" | "Project" | "MeetingReview" | "MeetingAttendees";
        RelationName: "User" | "Project" | "MeetingReview" | "MeetingAttendees";
        ListRelations: "MeetingReview" | "MeetingAttendees";
        Relations: {
            User: {
                Shape: User | null;
                Types: PrismaTypes["User"];
            };
            Project: {
                Shape: Project;
                Types: PrismaTypes["Project"];
            };
            MeetingReview: {
                Shape: MeetingReview[];
                Types: PrismaTypes["MeetingReview"];
            };
            MeetingAttendees: {
                Shape: MeetingAttendee[];
                Types: PrismaTypes["MeetingAttendee"];
            };
        };
    };
    MeetingReview: {
        Name: "MeetingReview";
        Shape: MeetingReview;
        Include: Prisma.MeetingReviewInclude;
        Select: Prisma.MeetingReviewSelect;
        Where: Prisma.MeetingReviewWhereUniqueInput;
        Fields: "Meeting" | "Contact";
        RelationName: "Meeting" | "Contact";
        ListRelations: never;
        Relations: {
            Meeting: {
                Shape: Meeting;
                Types: PrismaTypes["Meeting"];
            };
            Contact: {
                Shape: Contact;
                Types: PrismaTypes["Contact"];
            };
        };
    };
    MeetingAttendee: {
        Name: "MeetingAttendee";
        Shape: MeetingAttendee;
        Include: Prisma.MeetingAttendeeInclude;
        Select: Prisma.MeetingAttendeeSelect;
        Where: Prisma.MeetingAttendeeWhereUniqueInput;
        Fields: "Meeting" | "Contact";
        RelationName: "Meeting" | "Contact";
        ListRelations: never;
        Relations: {
            Meeting: {
                Shape: Meeting;
                Types: PrismaTypes["Meeting"];
            };
            Contact: {
                Shape: Contact;
                Types: PrismaTypes["Contact"];
            };
        };
    };
    Post: {
        Name: "Post";
        Shape: Post;
        Include: Prisma.PostInclude;
        Select: Prisma.PostSelect;
        Where: Prisma.PostWhereUniqueInput;
        Fields: "author";
        RelationName: "author";
        ListRelations: never;
        Relations: {
            author: {
                Shape: User | null;
                Types: PrismaTypes["User"];
            };
        };
    };
    User: {
        Name: "User";
        Shape: User;
        Include: Prisma.UserInclude;
        Select: Prisma.UserSelect;
        Where: Prisma.UserWhereUniqueInput;
        Fields: "accounts" | "sessions" | "Post" | "Meeting";
        RelationName: "accounts" | "sessions" | "Post" | "Meeting";
        ListRelations: "accounts" | "sessions" | "Post" | "Meeting";
        Relations: {
            accounts: {
                Shape: Account[];
                Types: PrismaTypes["Account"];
            };
            sessions: {
                Shape: Session[];
                Types: PrismaTypes["Session"];
            };
            Post: {
                Shape: Post[];
                Types: PrismaTypes["Post"];
            };
            Meeting: {
                Shape: Meeting[];
                Types: PrismaTypes["Meeting"];
            };
        };
    };
    Account: {
        Name: "Account";
        Shape: Account;
        Include: Prisma.AccountInclude;
        Select: Prisma.AccountSelect;
        Where: Prisma.AccountWhereUniqueInput;
        Fields: "user";
        RelationName: "user";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User;
                Types: PrismaTypes["User"];
            };
        };
    };
    Session: {
        Name: "Session";
        Shape: Session;
        Include: Prisma.SessionInclude;
        Select: Prisma.SessionSelect;
        Where: Prisma.SessionWhereUniqueInput;
        Fields: "user";
        RelationName: "user";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User;
                Types: PrismaTypes["User"];
            };
        };
    };
    VerificationToken: {
        Name: "VerificationToken";
        Shape: VerificationToken;
        Include: never;
        Select: Prisma.VerificationTokenSelect;
        Where: Prisma.VerificationTokenWhereUniqueInput;
        Fields: never;
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
}