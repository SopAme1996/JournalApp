import React from 'react'

export const JournalEntry = () => {
    return (
      <div className="journal__entry">
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage:
              "url(https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/pyr/5cd405db5cafe829df48e212/funimation-1.jpg)",
          }}
        ></div>
        <div className="journal__entry-body">
          <p className="journal__entry-title">Un nuevo dia</p>
          <p className="journal__entry-content">
            lorem ipsum dolor sit am orem ipsum dolor sit am orem ipsum dolor
            sit am
          </p>
            </div>

            <div className="journal__entry_date-box">
                <span>Monday</span>
                <h4>24</h4>
            </div>
      </div>
    );
}
