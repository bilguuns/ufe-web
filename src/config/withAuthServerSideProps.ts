import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";

import axios from "lib/utils/axios";

export function withAuthServerSideProps(
    getServerSidePropsFunc: GetServerSideProps
) {
    return async (context: any) => {
        const session = await getSession(context);

        if (!session) {
            context.res.writeHead(302, {
                Location: "/",
            });

            context.res.end();
        }

        axios.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${session?.token}`;

        return await getServerSidePropsFunc(context);
    };
}
