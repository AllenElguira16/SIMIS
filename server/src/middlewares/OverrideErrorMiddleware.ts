// // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// // @ts-ignore
// import {Err, GlobalErrorHandlerMiddleware, OverrideProvider, Req, Res} from "@tsed/common";
//
// @OverrideProvider(GlobalErrorHandlerMiddleware)
// export class OverrideErrorMiddleware extends GlobalErrorHandlerMiddleware {
//   use(@Err() error: any, @Req() request: Req, @Res() response: Res): any {
//     // DO SOMETHING
//     // console.log(request);
//     response.status(200);
//     return super.use(error, request, response);
//   }
// }
