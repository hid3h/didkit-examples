"use client";

export const Verification = () => {
  const signedSampleVc = {
    "@context": "https://www.w3.org/2018/credentials/v1",
    id: "urn:uuid:86a109aa-a3f6-4374-b46f-92c58fcb16a1",
    type: ["VerifiableCredential"],
    credentialSubject: {
      id: "did:example:my-data-subject-identifier-fix",
    },
    issuer: "did:key:z6Mkv2hGUtUdKdEVdqc7esowafyriuqPvxQFnVTrRqjMknj2",
    issuanceDate: "2023-01-08T18:23:56Z",
    proof: {
      type: "Ed25519Signature2018",
      proofPurpose: "assertionMethod",
      verificationMethod:
        "did:key:z6Mkv2hGUtUdKdEVdqc7esowafyriuqPvxQFnVTrRqjMknj2#z6Mkv2hGUtUdKdEVdqc7esowafyriuqPvxQFnVTrRqjMknj2",
      created: "2023-01-08T07:43:50.818Z",
      jws: "eyJhbGciOiJFZERTQSIsImNyaXQiOlsiYjY0Il0sImI2NCI6ZmFsc2V9..jyR9O8nb-ino0TXSCAhUdP2Z9iBc0E-aX7tyTHcFuOzOGd_uWpwHhA4gTOX961SUHB0un34e2YV41qc2lk0nCw",
    },
  };

  const verify = async () => {
    console.log("検証スタート");
    // didkit-wasmをサーバー側でimportしようとするとエラーになるので、
    // クライアント側でimportするようにする
    const didkit = await import("@spruceid/didkit-wasm");

    const proofOptions = {};
    const result = await didkit.verifyCredential(
      JSON.stringify(signedSampleVc),
      JSON.stringify(proofOptions)
    );
    console.log(result);
  };

  return (
    <div>
      <button onClick={verify}>検証する</button>
    </div>
  );
};
