import React, { useEffect, useState } from "react";
import { useFlags } from "launchdarkly-react-client-sdk";
import "../styles/PolicyPage.css";
import { fetchPolicyDocuments } from "../api/policyDocuments";

const PolicyPage = ({ user }) => {
  const { testFlag1 } = useFlags();
  const showNewLayout = testFlag1;
  const [policyDocuments, setPolicyDocuments] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [revertLoading, setRevertLoading] = useState(false);
  const [revertError, setRevertError] = useState(null);

  useEffect(() => {
    //retrieve policy documents from mock API
    fetchPolicyDocuments()
      .then(setPolicyDocuments)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  // Handler for revert button
  const handleRevert = async () => {
    //Call launchDarkly update-flag endpoint to turn off the flag at the top level. 
    setRevertLoading(true);
    setRevertError(null);
    try {
      const response = await fetch("/api/launchdarkly/update-flag", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectKey: "default",
          flagKey: "test-flag-1",
          patchOps: [
            { op: "replace", path: "/environments/test/on", value: false },
          ],
        }),
      });
      if (!response.ok) throw new Error("Failed to update flag");
    } catch (err) {
      setRevertError(err.message);
    } finally {
      setRevertLoading(false);
    }
  };

  return (
    <div className="policy-document-container">
      <div>{user ? `Welcome, ${user}!` : `Welcome, valued customer!`}</div>
      {user && user === "admin" && showNewLayout ? (
        <div>
          <button
            className="revert.primary"
            onClick={handleRevert}
            disabled={revertLoading}
          >
            {revertLoading ? "Reverting..." : "Revert Beta Feature Flag"}
          </button>
          {revertError && <div style={{ color: "red" }}>{revertError}</div>}
        </div>
      ) : null}
      {showNewLayout && (
        <div className="banner">
          You are part of our Beta Group! Enjoy the new layout and viewing
          premium documents.
        </div>
      )}

      {loading && <p>Loading policy documents...</p>}
      {error && <p style={{ color: "red" }}>Error loading policy documents</p>}

      {policyDocuments ? (  /*only show table if documents exist */
        showNewLayout ? (   /*show all documents including premium, in new (orange) layout */
          <div className="div-table">
            <div className="theaderrow-premium">
              <div className="theadercolumn tcolumn1">Document Name</div>
              <div className="theadercolumn tcolumn2">Date Created</div>
              <div className="theadercolumn tcolumn3">Created By</div>
            </div>
            {policyDocuments.map((p) => (
              <div key={p.id} className={`trow`}>
                <div
                  className="tcolumnnotclickable"
                  title={JSON.stringify(p.tags).concat(" docdate:" + p.docdate)}
                >
                  {p.tags && p.tags.DocumentName
                    ? p.tags.DocumentName
                    : p.originalname}
                </div>
                <div className="tcolumnnotclickable">{p.tags.DateCreated}</div>
                <div className="tcolumnnotclickable">{p.tags.Source}</div>
              </div>
            ))}
          </div>
        ) : ( /*show only standard documents, in old (green) layout */
          <div className="div-table">
            <div className="theaderrow">
              <div className="theadercolumn tcolumn1">Document Name</div>
              <div className="theadercolumn tcolumn2">Date Created</div>
              <div className="theadercolumn tcolumn3">Created By</div>
            </div>
            {policyDocuments
              .filter((p) => {
                return !p.premium;
              })
              .map((p) => (
                <div key={p.id} className={`trow premium`}>
                  <div
                    className="tcolumnnotclickable"
                    title={JSON.stringify(p.tags).concat(
                      " docdate:" + p.docdate,
                    )}
                  >
                    {p.tags && p.tags.DocumentName
                      ? p.tags.DocumentName
                      : p.originalname}
                  </div>
                  <div className="tcolumnnotclickable">
                    {p.tags.DateCreated}
                  </div>
                  <div className="tcolumnnotclickable">{p.tags.Source}</div>
                </div>
              ))}
          </div>
        )
      ) : (
        <div className="div-table">No policy documents available.</div>
      )}
    </div>
  );
};

export default PolicyPage;
