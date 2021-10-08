var express = require('express');
var mdAutenticacion = require('../middlewares/auth');
var app = express();
var CaseDocuments = require('../models/casedocuments');
var Checklist = require('../models/checklist');
var ObjectID = require('mongodb').ObjectID;


// ==========================================
// Get Case Document
// ==========================================
app.get('/:id', mdAutenticacion.verificaToken, (req, res, next) => {

    var id = req.params.id;
    var desde = req.query.from || 0;
    from = Number(desde);

    CaseDocuments.find({
            'case': id
        })
        .skip(from)
        .limit(10)
        .populate('user', 'name')
        .sort({
            'type': -1
        })
        .exec(
            (err, casedocuments) => {

                if (err) {
                    return res.status(500).json({
                        ok: false,
                        message: 'Error loading casedocuments',
                        errors: err
                    });
                }

                CaseDocuments.count({}, (err, count) => {
                    console.log(casedocuments);
                    res.status(200).json({
                        ok: true,
                        casedocuments,
                        count
                    });

                })

            });
});


// ==========================================
// Update Case Document
// ==========================================
app.put('/:id', mdAutenticacion.verificaToken, (req, res) => {

    var id = req.params.id;
    var body = req.body;

    CaseDocuments.findById(id, (err, _case) => {


        if (err) {
            return res.status(500).json({
                ok: false,
                message: 'Error searching case',
                errors: err
            });
        }

        if (!_case) {
            return res.status(400).json({
                ok: false,
                message: 'The case with the id ' + id + ' dont exists',
                errors: {
                    message: 'Theres no case whith the given ID.'
                }
            });
        }


        _case.name = body.name;
        _case.user = req.user;
        _case.case = body.case;
        _case.type = body.type;
        _case.status = body.status;
        _case.relationship = body.relationship

        _case.save((err, savedCaseDocuments) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    message: 'Error updating case',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                _case: savedCaseDocuments
            });

        });

    });

});



// ==========================================
// Create Case Document
// ==========================================
app.post('/', mdAutenticacion.verificaToken, (req, res) => {

    var body = req.body;
    console.log(body);
    var _case = new CaseDocuments({
        name: body.name,
        user: req.user,
        case: body.case,
        type: body.type,
        status: body.status,
        relationship: body.relationship,
        isCitizen: body.isCitizen,
        inOrOut: body.inOrOut,
        hasJointSponsor: body.hasJointSponsor
    });

    _case.save((err, savedCaseDocuments) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                message: 'Error creating case',
                errors: err
            });
        }
        var photoid;

        if (savedCaseDocuments.isCitizen) {
            photoid = " U.S. Passport"
        } else {
            photoid = " Permanent Resident Card"
        }

        var SPONSOR_SPOUSE = [{
                exhibit: 1,
                descr: 'Payment for the amount of $535 for I-130 filling fee.',
                require: true
            }, {
                exhibit: 2,
                descr: 'Form I-130, Petition for Alien Relative.',
                require: true,
                value: true
            }, {
                exhibit: 2.2,
                descr: 'Form I-130A, Supplemental Information for Spouse Beneficiary.',
                require: true,
                value: true
            }, {
                exhibit: 2.3,
                descr: 'Copy of Petitioner’s ' + photoid,
                require: true
            },
            {
                exhibit: 3,
                descr: 'Copy of Petitioner’s Birth Certificate',
                require: true
            },
            {
                exhibit: 4,
                descr: 'Copy of Applicant’s Birth Certificate',
                require: true
            },
            {
                exhibit: 5,
                descr: 'Copy of Marriage Certificate',
                require: true
            },
            {
                exhibit: 5.5,
                descr: 'If the Petitioner and/or Applicant has been married before and/or have any children, please check the documents that apply to your application',
                justLabel: true,
                require: false
            },
            {
                exhibit: 6,
                descr: 'Copy of the Petitioner’s Divorce Certificate',
                require: false
            },
            {
                exhibit: 7,
                descr: 'Copy of the Applicant’s Divorce Certificate',
                require: false
            },
            {
                exhibit: 8,
                descr: 'Copy of Birth Certificate of all your children',
                require: false
            },
            {
                exhibit: 9,
                descr: 'If you have been married for less than 2 years and have no children we strongly recommend that you select as many (And at least 3) of the following list of evidence as proof of bonafide marriage (Is very important that the Petitioner and the Applicants names appear on the documents)',
                justLabel: true,
                require: false
            },
            {
                exhibit: 10,
                descr: 'Copy of the last 6 months of Joint Bank account statements',
                require: false
            },
            {
                exhibit: 11,
                descr: 'Copy of documents of joint ownership of real state or any other major property',
                require: false
            },
            {
                exhibit: 12,
                descr: 'Copy of a joint Lease agreement.',
                require: false
            },
            {
                exhibit: 13,
                descr: 'Copy of the last 6 months of joint Gas Bills',
                require: false
            },
            {
                exhibit: 14,
                descr: 'Copy of the last 6 months of joint Electricity Bills',
                require: false
            },
            {
                exhibit: 15,
                descr: 'Copy of the last 6 months of joint Water Bills',
                require: false
            },
            {
                exhibit: 16,
                descr: 'Copy of the last 6 months of joint Phone Bills',
                require: false
            },
            {
                exhibit: 17,
                descr: 'Copy of joint Health Insurance policy',
                require: false
            },
            {
                exhibit: 18,
                descr: 'Copy of joint Car Insurance policy',
                require: false
            },
            {
                exhibit: 19,
                descr: 'Copy of life insurance showing the applicant as a beneficiary.',
                require: false
            }
        ];

        var SPONSOR_CHILDREN = [{
                exhibit: 1,
                descr: 'Payment for the amount of $535 for I-130 filling fee.',
                require: true
            },
            {
                exhibit: 1.5,
                descr: 'Form I-130, Petition for Alien Relative.',
                require: true,
                value: true
            },
            {
                exhibit: 2,
                descr: 'Copy of Petitioner’s ' + photoid,
                require: true
            },
            {
                exhibit: 3,
                descr: 'Copy of Petitioner’s Birth Certificate',
                require: true
            },
            {
                exhibit: 4,
                descr: 'Copy of Applicant’s Birth Certificate',
                require: true
            },
            {
                exhibit: 5,
                descr: 'Copy of Marriage Certificate (If Apply)',
                require: true
            }
        ];

        var APPLICANT = [{
                exhibit: 1,
                descr: 'Payment for the amount of US$1,225 for I-485 Filling fee',
                require: true
            },
            {
                exhibit: 2,
                descr: 'Form I-485, Application to Register Permanent Residence or Adjust Status',
                require: true,
                value: true
            },
            {
                exhibit: 3,
                descr: 'Form I-765, Application for Employment Authorization',
                require: true,
                value: true
            },
            {
                exhibit: 4,
                descr: 'Form I-131, Application for Travel Document',
                require: true,
                value: true
            },
            {
                exhibit: 5,
                descr: 'Copy of Applicant’s Birth Certificate',
                require: true
            },
            {
                exhibit: 6,
                descr: 'Copy of Applicant’s Passport',
                require: true
            }, {
                exhibit: 7,
                descr: 'Copy of your form I-94 as proof of legal entry into the US.',
                require: true
            }, {
                exhibit: 8,
                descr: 'Sponsor’s Form I-864, Affidavit of Support Under Section 213A of the INA',
                require: true,
                value: true
            },
            {
                exhibit: 9,
                descr: 'Copy of Sponsor’s U.S. ' + photoid,
                require: true
            }, {
                exhibit: 10,
                descr: 'Copy of Sponsor’s U.S. income Taxes for the last 3 years.',
                require: true
            }
        ];

        if (savedCaseDocuments.hasJointSponsor) {
            APPLICANT.push({
                exhibit: 11,
                descr: 'Joint Sponsor’s Form I-864, Affidavit of Support Under Section 213A of the INA',
                require: true,
                value: true
            });

            APPLICANT.push({
                exhibit: 12,
                descr: 'Copy of Joint Sponsor’s U.S. Passport or Permanent Resident Card.',
                require: true
            });

            APPLICANT.push({
                exhibit: 13,
                descr: 'Copy of Joint Sponsor’s U.S. income Taxes for the last 3 years.',
                require: true
            });


        }

        APPLICANT.push({
            exhibit: 14,
            descr: 'Form I-693, Report of Medical Examination and Vaccination Record',
            require: true
        });

        APPLICANT.push({
            exhibit: 14.5,
            descr: 'Form I-944, Declaration of Self - Sufficiency',
            require: true,
            value: true
        });
        APPLICANT.push({
            exhibit: 15,
            descr: 'Important information about Form I-693: When you apply for a green card(adjustment of status) in the United States, you usually need to have a medical examination.The exam must be done by a doctor who is authorized by U.S.Citizenship and Immigration Services(USCIS).USCIS designates certain doctors(also known as civil surgeons) to perform the medical exam required for most Green Card applicants.Military physicians are authorized to perform immigration medical exams at a military treatment facility within the United States for U.S.veterans, members of the U.S.military and designated dependents.Your medical examination must be attached to your packet when you send it to USCIS to initiate your case. To find an authorized Doctor near you please visit: https://my.uscis.gov/findadoctor',
            require: false,
            justLabel: true
        });


        var SPONSOR_FATHER = [{
                exhibit: 1,
                descr: 'Payment for the amount of $535 for I-130 filling fee.',
                require: true
            },
            {
                exhibit: 1.5,
                descr: 'Form I-130, Petition for Alien Relative.',
                require: true,
                value: true
            },
            {
                exhibit: 2,
                descr: 'Copy of Petitioner’s ' + photoid,
                require: true
            },
            {
                exhibit: 3,
                descr: 'Copy of Petitioner’s Birth Certificate',
                require: true
            },
            {
                exhibit: 4,
                descr: 'Copy of Applicant’s Birth Certificate',
                require: true
            },
            {
                exhibit: 5,
                descr: 'Copy of Petitioner’s Marriage Certificate (If Apply)',
                require: true
            },
            {
                exhibit: 6,
                descr: 'Copy of Applicant’s  Marriage Certificate (If Apply)',
                require: true
            }
        ];

        if (savedCaseDocuments.hasJointSponsor) {
            SPONSOR_FATHER.push({
                exhibit: 7,
                descr: 'Copy of Joint Sponsor’s U.S. Passport or Permanent Resident Card.',
                require: true
            });
        }


        var SPONSOR_SIBILING = [{
                exhibit: 1,
                descr: 'Payment for the amount of $535 for I-130 filling fee.',
                require: true
            },
            {
                exhibit: 1.5,
                descr: 'Form I-130, Petition for Alien Relative.',
                require: true,
                value: true
            },
            {
                exhibit: 2,
                descr: 'Copy of Petitioner’s ' + photoid,
                require: true
            },
            {
                exhibit: 3,
                descr: 'Copy of Petitioner’s Birth Certificate',
                require: true
            },
            {
                exhibit: 4,
                descr: 'Copy of Applicant’s Birth Certificate',
                require: true
            }
        ];

        if (savedCaseDocuments.hasJointSponsor) {
            SPONSOR_SIBILING.push({
                exhibit: 5,
                descr: 'Copy of Joint Sponsor’s U.S. Passport or Permanent Resident Card.',
                require: true
            });
        }

        var _checklist;
        var CHECKLIST = [];

        if (savedCaseDocuments.type === 'APPLICANT') {
            CHECKLIST = APPLICANT;
        }

        if (savedCaseDocuments.type === 'SPONSOR' && savedCaseDocuments.relationship === 'SPOUSE') {
            CHECKLIST = SPONSOR_SPOUSE;
        }

        if (savedCaseDocuments.type === 'SPONSOR' && savedCaseDocuments.relationship === 'CHILDREN') {
            CHECKLIST = SPONSOR_CHILDREN;
        }

        if (savedCaseDocuments.type === 'SPONSOR' && savedCaseDocuments.relationship === 'PARENT') {
            CHECKLIST = SPONSOR_FATHER;
        }

        if (savedCaseDocuments.type === 'SPONSOR' && savedCaseDocuments.relationship === 'SIBILING') {
            CHECKLIST = SPONSOR_SIBILING;
        }

        if (savedCaseDocuments.type === 'N400') {
            CHECKLIST = [{
                    exhibit: 1,
                    descr: 'Payment for Form N-400 Filling fees.',
                    require: true
                },
                {
                    exhibit: 2,
                    descr: 'Form N-400, Application for Naturalization.',
                    require: true
                },
                {
                    exhibit: 3,
                    descr: 'Copy of Permanent Resident Card.',
                    require: true
                },
                {
                    exhibit: 4,
                    footer: 'Are you currently married? If you are married, you will need to provide a copy of your Marriage Certificate. ',
                    descr: 'Copy of Marriage Certificate',
                    require: false
                }, {
                    exhibit: 5,
                    footer: 'Are you applying for naturalization based on military service? If yes you will need to provide Form N-426, Request for Certification of Military Service.',
                    descr: 'Form N-426, Request for Certification of Military Service.',
                    require: false
                }
            ];
        }


        if (savedCaseDocuments.type === 'I90') {
            CHECKLIST = [{
                    exhibit: 1,
                    descr: 'Payment for I-90 Filling fees.',
                    require: true
                },
                {
                    exhibit: 2,
                    descr: 'Form I-90, Application to Replace Permanent Resident Card.',
                    require: true
                }
            ];
        }


        console.log(CHECKLIST);
        for (check of CHECKLIST) {
            _checklist = new Checklist({
                userid: req.user,
                packageid: savedCaseDocuments.id,
                value: false,
                descr: check.descr,
                require: check.require,
                justLabel: check.justLabel || false,
                exhibit: check.exhibit
            });
            _checklist.save();
        }

        res.status(201).json({
            ok: true,
            _case: savedCaseDocuments
        });


    });

});


// ============================================
//   Delete Case Document
// ============================================
app.delete('/:id', mdAutenticacion.verificaToken, (req, res) => {

    var id = req.params.id;

    _case.findByIdAndRemove(id, (err, deletedCase) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                message: 'Error deleting case',
                errors: err
            });
        }

        if (!deletedCase) {
            return res.status(400).json({
                ok: false,
                message: 'Theres no case whith the given ID.',
                errors: {
                    message: 'Theres no case whith the given ID.'
                }
            });
        }

        res.status(200).json({
            ok: true,
            _case: deletedCase
        });

    });

});


module.exports = app;