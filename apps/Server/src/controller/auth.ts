import msal from "@azure/msal-node";
import { msalConfig } from "../consts/auth";

const msalInstance = new msal.ConfidentialClientApplication(msalConfig as any);
const cryptoProvider = new msal.CryptoProvider();

const getUserProfile = async (req: any, res: any, next: any) => {
  try {
    if (req.session.isAuthenticated) {
      const _result_check_user = req.session.user_email;

      res.send({ success: true, user: _result_check_user });
    } else {
      res.status(403).send({ success: true, login: false });
    }
  } catch (e) {
    res.status(403).send({ success: true, login: false });
  }
};

const userRedirect = async (req: any, res: any, next: any) => {
  try {
    if (req.body.state) {
      const state = JSON.parse(cryptoProvider.base64Decode(req.body.state));

      if (state.csrfToken === req.session.csrfToken) {
        req.session.authCodeRequest.code = req.body.code; // authZ code
        req.session.authCodeRequest.codeVerifier =
          req.session.pkceCodes.verifier; // PKCE Code Verifier

        try {
          const tokenResponse = await msalInstance.acquireTokenByCode(
            req.session.authCodeRequest
          );
          //   req.session.accessToken = tokenResponse.accessToken;
          //   req.session.idToken = tokenResponse.idToken;
          //   req.session.account = tokenResponse.account;
          req.session.isAuthenticated = true;

          req.session.user_email =
            tokenResponse?.account?.username?.toLowerCase();
          res.redirect(state.redirectTo);
        } catch (error) {
          res.redirect("/");
        }
      } else {
        res.redirect("/");
      }
    } else {
      res.redirect("/");
    }
  } catch (e) {
    res.redirect("/");
  }
};

export { userRedirect, getUserProfile };
